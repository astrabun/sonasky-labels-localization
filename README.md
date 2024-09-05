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

### Syntax

Description syntax:

```json
// ...
    "description": "This user is a $LOCALIZED_SPECIES_NAME! AKA: $OPTIONAL_COMMA_SEPARATED_LIST_OF_OTHER_COMMON_NAMES [Category: $LOCALIZED_CATEGORY_NAME_OPTIONAL]"
// ...
```

Generally, please try to follow the pattern of the original English label. In particular though, if the description contains `[Category: ...]`, please only translate what comes after the `:` character. The word `Category` is used when performing parsing on https://sonasky-browse.bunnys.ky/. 

For example:

|Language|Description|-|
|--|--|--|
|English|This user is a parrot [Category: Avian/Bird]||
|French|Cet utilisateur est un perroquet [Category: Oiseau]|Note how "Category" remains untranslated while the category text *is* translated|


### Example translation:

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
