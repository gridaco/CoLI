export function insertBetween(arr: any[], insert: any) {
  for (let i = 0; i < arr.length; i++) {
    if (i !== 0 && i !== arr.length - 1) {
      arr.splice(i, 0, insert);
    }
  }
  return arr;
}
