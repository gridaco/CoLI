import { IProperty, Property } from "./property";

export class SchemaBuilder {
  readonly $name: string;
  constructor(params: { $name: string }) {
    this.$name = params.$name;
  }

  properties: IProperty[];
  addProperty(p: IProperty): this {
    // init properties arr when not set.
    if (!this.properties) {
      this.properties = [];
    }

    this.properties.push(p);

    return this;
  }
}

// demo
if (require.main === module) {
  const newSchema = new SchemaBuilder({
    $name: "ButtonProps",
  }).addProperty(
    new Property({
      name: "variant",
      type: "",
    })
  );
}
