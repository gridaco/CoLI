export abstract class ColiBuilder<T = any> {
  blocks: [];

  abstract finalize(): T;
}
