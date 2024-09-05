# CONTRIBUTING

Fork the repo, add your translation(s), and create a PR!

Please try to keep the format of the description the same.

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
