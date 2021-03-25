import { File, Import, Function, Type } from "coli/lib";

const file = new File({ name: "example", path: "." })
  .import(
    new Import()
      .importDefault("styled")
      .and({ import: "utils", as: "sutil" })
      .from("@emotion/styled")
      .finalize()
  )
  .import(
    new Import()
      .import({ import: "Button" })
      .and({ import: "Radio", as: "MRadio" })
      .from("@material/core")
      .finalize()
  )
  .withFunction(
    new Function("Login").returns(new Type("JSX.Element")).finalize()
  );
