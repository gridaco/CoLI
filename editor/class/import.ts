export class ImportDeclaration {
  _default: string;
  _form: string;
  _import: Array<string | { name: string; as: string }> = [];

  constructor({ importDefault, from, _import }) {
    this._default = importDefault;
    this._form = from;
    this._import = _import;
  }

  public call() {
    const imports = this._import
      ?.filter((i) => i != "")
      .map((i) => {
        if (typeof i === "object") {
          return `${i.name} as ${i.as == null ? "" : i.as}`;
        } else if (i !== "") {
          return `${i}`;
        } else {
          return "";
        }
      });

    const innerWrap = imports?.join(", ");

    let code = "";

    code += `import ${this._default}`;

    if (innerWrap != "") {
      code += `, { ${innerWrap} }`;
    }

    code += ` from "${this._form}"`;

    return code;
  }
}
