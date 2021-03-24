export class ImportDeclaration {
  _default?: string;
  _form?: string;
  _import?: Array<string>;

  constructor({ _default, _from, _import }) {
    this._default = _default;
    this._form = _from;
    this._import = _import;
  }

  public call() {
    let code = "import";

    this._default != null && (code += ` ${this._default}`);

    this._form != null && (code += ` from "${this._form}"`);

    return code;
  }
}
