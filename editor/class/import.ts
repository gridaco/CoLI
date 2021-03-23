export class ImportDeclaration {
  _default: string;
  _form: string;
  _import: Array<string | { name: string; as: string }>;

  constructor({ importDefault, from, _import }) {
    this._default = importDefault;
    this._form = from;
    this._import = _import;
  }

  public call() {
    console.log(this._import);

    let code = "";

    code += `import ${this._default} from "${this._form}"`;

    return code;
  }
}
