export class ImportDeclaration {
  _default?: string;
  _from?: string;
  _import: Array<string | null>;

  constructor({ _default, _from, _import }) {
    this._default = _default;
    this._from = _from;
    this._import = _import;
  }

  public exportAs() {
    const { _default, _from, _import } = this;
    const importIsNotEmpty = _import != null && _import.join("") !== "";
    let code = "import";

    _default != null && (code += ` ${_default}`);

    if (importIsNotEmpty && _default != null) {
      code += `,`;
    }

    importIsNotEmpty && (code += ` { ${_import.join(", ")} }`);

    _from != null && (code += ` from "${_from}"`);

    return code;
  }
}
