import { FormattingToken } from "../tokens";
export function indent(o: any) {
  const flattened = flatten(o);

  // loop trhough flattened array, inject the "\t" before the "\n" appears.
  return flattened.reduce((acc, item, index) => {
    if (
      item === "\n" ||
      (item instanceof FormattingToken && item.kind === "\n")
    ) {
      acc.push("\n", "\t");
    } else {
      acc.push(item);
    }
    return acc;
  }, []);
}

/**
 * deeply flattens the nested array
 * @param arr
 * @returns
 */
function flatten(arr) {
  const newArr = arr.reduce((acc, item) => {
    if (Array.isArray(item)) {
      acc = acc.concat(flatten(item));
    } else {
      acc.push(item);
    }

    return acc;
  }, []);

  return newArr;
}
