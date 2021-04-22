import { schema } from "coli";

const nameProperty = new schema.Property({
  name: "name",
  type: "string",
  description: "indicates the name of the object",
});

const descriptionProperty = new schema.Property({
  name: "description",
  type: "string",
  description: "indicates the description of the object",
});

// #region finalize schema
const exComponentProp = new schema.SchemaBuilder({
  $name: "ExampleComponentProps",
});
exComponentProp.addProperty(nameProperty);
exComponentProp.addProperty(descriptionProperty);
// #endregion finalize schema

// const nameAndDescriptionType = new schema.

const nameProperty_str = schema.str_property(nameProperty);
const descriptionProperty_str = schema.str_property(descriptionProperty);

console.log(nameProperty_str);
console.log(descriptionProperty_str);
console.log(exComponentProp);
