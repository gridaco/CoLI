export function wrapArrayWith(arr: any[], t: any) {
  arr.unshift(t);
  arr.push(t);
  return arr;
}
