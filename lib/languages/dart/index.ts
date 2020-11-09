
// TODO
export class DartFile {
    imports: Array<string>;
    addImport(module: string): this {
        this.imports.push(module)
        return this;
    }

    addClass(): this {
        return this;
    }

    build(): string {
        return ``;
    }
}