/**
 * function type, a.k.a lambda type
 * ```ts
 * // example
 * type FunctionType = (...args: any[]) => any;
 * ```
 */
export class FunctionType {
  constructor() {}
  parameters: any[];
  type: any;
}
