import { BskyAgent } from "@atproto/api";

import * as fs from "fs";

const GENERATE_JSON_FILE_OF_SPECIES__DIR = ".";
const GENERATE_JSON_FILE_OF_SPECIES__NAME = "labels.json";

const ozone_service_user_did = process.env.OZONE_SERVICE_USER_DID as string;

const agent = new BskyAgent({
  service: "https://bsky.social",
});

BskyAgent.configure({
  appLabelers: [process.env.OZONE_SERVICE_USER_DID ?? ""],
});

async function main() {
  await agent.login({
    identifier: process.env.BSKY_USER as string,
    password: process.env.BSKY_PASS as string,
  });

  let onDiskLocalizations = JSON.parse(
    fs.readFileSync(
      `${GENERATE_JSON_FILE_OF_SPECIES__DIR}/${GENERATE_JSON_FILE_OF_SPECIES__NAME}`,
      "utf8"
    )
  ) as Array<any>;
  console.log(
    `Loaded ${onDiskLocalizations.length} label localization(s) from disk.`
  );

  const getOzoneCurrentPolicies = async () => {
    await agent.refreshSession();
    let response = await agent
      .withProxy("atproto_labeler", ozone_service_user_did)
      .api.com.atproto.repo.getRecord({
        repo: ozone_service_user_did,
        collection: "app.bsky.labeler.service",
        rkey: "self",
      });
    return (response as any).data.value.policies;
  };

  const uploadLocalizationLabels = async () => {
    await agent.refreshSession();
    let current_policies = await getOzoneCurrentPolicies();
    let labelValues = current_policies.labelValues;
    let labelValueDefinitions = current_policies.labelValueDefinitions;
    let updated = labelValueDefinitions.map((labelDef) => {
      const newLabelDef = { ...labelDef };
      if (
        onDiskLocalizations.map((i) => i.id).includes(newLabelDef.identifier)
      ) {
        let localesForDef = onDiskLocalizations.filter(
          (i) => i.id === newLabelDef.identifier
        )[0].locales;
        newLabelDef.locales = localesForDef;
      }
      return newLabelDef;
    });
    let body = {
      repo: ozone_service_user_did,
      collection: "app.bsky.labeler.service",
      rkey: "self",
      record: {
        $type: "app.bsky.labeler.service",
        policies: {
          labelValues: labelValues,
          labelValueDefinitions: updated,
        },
        createdAt: new Date().toISOString(),
      },
    };
    let response = await agent
      .withProxy("atproto_labeler", ozone_service_user_did)
      .api.com.atproto.repo.putRecord(body);
    console.log("Upload localizations successful: ", `[${response.success}]`);
  };

  await uploadLocalizationLabels();
}

main().catch((err) => {
  throw Error(`${err}`);
});
