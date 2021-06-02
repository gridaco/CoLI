# Coli Naming

- variable naming
- route naming
- entity naming
- file naming
- directory naming

## Installation & Usage

```sh
yarn add @coli.codes/naming
```

```ts
import { nameit } from "@coli.codes/nameit";

nameit("Content Wrap"); // - [ContentWrap, contentWrap, content-wrap, content_wrap, CONTENT_WRAP, contentwrap]

// of course, you can pass the configurations.
```

## Scope handling

with `ScopedNamer` you can pervent confliction of each identifiers' name

**conflict prevent prefix/suffix**

- +n - [`conflicting-name-0`, `conflicting-name-1`]
- +hash - [`conflicting-name-GT3`, `conflicting-name-AG9`]
- +named entity (not recommanded) - [`conflicting-name-white`, `conflicting-name-ambient`]
- +single conflicting underscore escape - [`conflicting_name`, `_conflicting_name` or `__conflicting_name`]

## Exceptional realworld scenarios (supported)

**nextjs' page route naming**

- `[slug].js`
- `_app.js`
