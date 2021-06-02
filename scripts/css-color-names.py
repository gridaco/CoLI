import json


with open("./css-color-names.json") as f:
    obj = json.load(f)
    for k in obj:
        colorname = k
        hex = obj[k]
        print(
            f'static {colorname} = new CssNamedColor("{colorname}", "{hex}");')
