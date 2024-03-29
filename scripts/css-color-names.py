import json


CLASS_NAME = "CssNamedColor"
with open("./css-color-names.json") as f:

    obj = json.load(f)
    fields = []
    all = []
    values = []
    for k in obj:
        colorname = k
        hex = obj[k]
        values.append(hex)
        all.append(f'{CLASS_NAME}.{colorname}')
        fields.append(
            f'static {colorname} = new CssNamedColor("{colorname}", "{hex}");')

    static_fields = "\n\t".join(fields)
    static_all_field = f'static all = [{",".join(all)}]'
    constructor = """
    constructor(readonly colorname: string, readonly colorvalue: string) {
        super(colorname);
    }"""

    get_function = """
/**
* get the named css with value
* @param value
*/
static getWithValue(value: string): CssNamedColor {
    return this.all.find((i) => {
        return i.colorvalue == value;
    });
}
    """

    print(f"""
/**
 * named css colors - https://www.w3.org/wiki/CSS/Properties/color/keywords
 * generated by css-color-names.py
 */
export class {CLASS_NAME} extends Identifier{{
{static_fields}

{constructor}

{get_function}

{static_all_field}
}}""")
