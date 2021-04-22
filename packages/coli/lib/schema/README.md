# A progomatic Schema designer

This lib enables programmers to develop app that requires data schema declaration from user.

It follows JSON Schema standard & It's pojo typings with extra pre-defined real-world type declarations - for example, text and image

This is a package to extend coli programatically. You might experience some "why does it not work like others?" moments.

## Usage

```ts
// new schema factory for ease of use

// plain JsonObj as nested type
interface LatLng {
    lat: number
    lng: number
}

// some custom built reusable type definition
const ThisOrThat = new SchemaFactory({} | {});

const myReactPropsSchemaFactory = new SchemaFactory({
    name: string,
    location: LatLng
});

// retrieve extract JSON formatted schema definition
const def = myReactPropsSchemaFactory.definition;

// validating input data
const __someDynamicInputData = { ... }
const isInputDataValid = myReactPropsSchemaFactory.validate(__someDynamicInputData)
```

**Create factory from other sources**

```ts
// input a example data (json)
SchemaFactory.fromExample();

// input a schema definition string (schema json)
SchemaFactory.fromDefinition();
```

## Used by

- [Design Assistant by Bridged](https://github.com/bridgedxyz/assistant)
- [Schema Studio](https://github.com/bridgedxyz/schema-studio)

## References

- [json-schema.org](https://json-schema.org/)
- [json-schema-builder](https://github.com/json-schema-form/json-schema-builder) & [its demo](http://ralphowino.github.io/schema-form-builder/#/builder)
- [GenSON \(python\)](https://github.com/wolverdude/GenSON)

## IDK (Developer's Idea note - something experimental)

- extending a json schema? - https://stackoverflow.com/a/41020586/5463235
