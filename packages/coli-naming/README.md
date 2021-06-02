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

## Usecases

- const Wrapper = styled.div`~`;
- interface IModel {}
- class Model {}
- function add () {}
- function Component () {}
- pages/[slug].js
- const \_memberVar = calc(porps.value)
- const API_SECRET = "alza0000"
- function checkIfThatIsTrue() : boolean
- const isSomethingTrue : boolean

## Input scenario

`/` is a seperator, it can be replaced with cases - 'a/b' -> "AB", "aB", "a_b", "\_a_b", etc..

- "+-$" - "plus/minus/dollarsign"
- "- Dollar" - "\_/dollar"
- "Hi" - "hi"
- "Content wrap" - "content/wrap"
- "" - "unnamed/rand()"
- "_" - "_"
- "$" - "dollarsign" (`$` is a valid name is es, but not a good pattern, you have to specify it as a sign keyword in order to use it - see it below)
- Unique.dollarsign - "$"
