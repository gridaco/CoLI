import { IProperty } from "./property";

export function str_property(p: IProperty) {
  return `"${p.name}": {
        ${str_kvlines(
          str_kvline("type", p.type),
          str_kvline("description", p.description)
        )}
  }
  `;
}

/**
 * builds simple key value property declaration line string
 * e.g. k: "awesome" value: "bridged.xyz" -> `"awesome": "bridged.xyz"`
 * @param k
 * @param v
 * @returns
 */
export function str_kvline(k: string, v: string): string {
  if (v == undefined) {
    return "";
  }
  return `"${k}": "${v}"`;
}

export function str_kvlines(...lines: string[]): string {
  return lines.join(",\n");
}

/**
 * preserveInput (true by default) - preserves input when non complete json was givven - formats with complete json and removes additional "{", "}" to make it same as original input.
 * 
 * when true,
 * ```json

    "name": {
        "type": "string",
        "description": "indicates the name"
    }

 * ```
 * 
 * when false,
 * ```json
{
    "name": {
        "type": "string",
        "description": "indicates the name"
    }
}
 * ```
 * @param t 
 * @param options 
 * @returns 
 */
export function format(
  t: object | string,
  options?: {
    space?: number;
    preserveInput?: boolean;
  }
): string {
  let obj = t;
  let modified = false;
  if (typeof t == "string") {
    try {
      obj = JSON.parse(t);
    } catch (_) {
      // almost unexpected token error, which is mostly caused by no opening braket "{"
      const wrapped = `{${t}}`;
      obj = JSON.parse(wrapped);
      modified = true;
    }
  }
  const formatted = JSON.stringify(obj, null, options?.space ?? 4);
  let final = formatted;
  if ((modified && options?.preserveInput) ?? true) {
    // opening and closing {} was added we need to remove them
    final = final.substr(1, formatted.length - 2); // -2 represents (len - last - onemore)
  }

  return final;
}

// ==================================
// demo ---- keep this at end of file
// ==================================
if (require.main === module) {
  console.log(
    format(
      str_property({
        name: "name",
        type: "string",
        description: "indicates the name",
      })
    )
  );
}
