/**
 * inserts the trailing item if the existing arrays are not empty
 */
export function insertTrailing(arr: any[], insert: any) {
  return arr && arr.push(insert) && arr;
}
