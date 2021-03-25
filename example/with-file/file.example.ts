import { File, Import } from "coli/lib";

const file = new File({ name: "example", path: "." }).addImport(
  new Import()
    .importDefault("styled")
    .and({ import: "utils", as: "sutil" })
    .from("@emotion/styled")
    .finalize()
);
