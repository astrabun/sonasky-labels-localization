# SonaSky Labels Translation

This repo is for collaborative localization of species labels in SonaSky.

## TODO

Working on automatically pushing these translations back up to the labeler; for now, adding translations in this repo and then creating a PR is a great first step! When I go to review, I'll manually add the new translations until I finish the script to do it for me (still writing and testing the script).

## Localization

> looking for folks to help with translation! take a peek at `labels.json` to see if there's labels you can translate.

Languages: https://github.com/bluesky-social/social-app/blob/main/src/locale/languages.ts#L7C1-L25C2

Use the string value for the target locale you're contributing to. For example:

|Language|Lang value|
|---|---|
|English|`en`|
|Português (BR) – Portuguese (BR)|`pt-BR`|

#### Example translation:

Start:

```json
[
    // ...
    {
        "id": "rabbit",
        "locales": [
            {
                "lang": "en",
                "name": "Rabbit",
                "description": "This user is a Rabbit! AKA: bunny, bnuy, bun"
            }
        ]
    },
    // ...
]
```

Add BR Portuguese:

```json
[
    // ...
    {
        "id": "rabbit",
        "locales": [
            {
                "lang": "en",
                "name": "Rabbit",
                "description": "This user is a Rabbit! AKA: bunny, bnuy, bun"
            },
            // NEW translation below; includes the original English in the AKA section, but this is not required.
            {
                "lang": "pt-BR",
                "name": "Coelha/Coelho",
                "description": "Este usuário é um Coelho!! AKA: rabbit, bunny, bnuy, bun"
            }
        ]
    },
    // ...
]
```
