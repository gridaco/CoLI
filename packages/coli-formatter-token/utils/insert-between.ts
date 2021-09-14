export function insertBetween(arr: any[], insert: any) {
  return [].concat(...arr.map((n) => [n, insert])).slice(0, -1);
}
