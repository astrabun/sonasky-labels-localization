# SonaSky Labels Translation

This repo is for collaborative localization of species labels in SonaSky.

## Automation

This repo automatically syncs labels from the repo to the SonaSky labeler on new commits to the `main` branch. 

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
