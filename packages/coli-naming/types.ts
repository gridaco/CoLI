interface NamingSeed {}

export enum NameCases {
  flat = "flat",
  snake = "snake",
  _snake = "_snake",
  camel = "camel",
  _camel = "_camel",
  pascal = "pascal",
  _pascal = "_pascal",
  kebab = "kebab",
  upper_snake = "upper_snake",
  _upper_snake = "_upper_snake",
  upper = "upper",
  _upper = "_upper",
}

export type NameCase =
  | typeof NameCases.flat
  | typeof NameCases.snake
  | typeof NameCases._snake
  | typeof NameCases.camel
  | typeof NameCases._camel
  | typeof NameCases.pascal
  | typeof NameCases._pascal
  | typeof NameCases.kebab
  | typeof NameCases.upper_snake
  | typeof NameCases._upper_snake
  | typeof NameCases.upper
  | typeof NameCases._upper;

/**
 * subset of NameCase. without kebab case
 */
export type VariableNameCase =
  | typeof NameCases.flat
  | typeof NameCases.snake
  | typeof NameCases._snake
  | typeof NameCases.camel
  | typeof NameCases._camel
  | typeof NameCases.pascal
  | typeof NameCases._pascal
  | typeof NameCases.upper_snake
  | typeof NameCases._upper_snake
  | typeof NameCases.upper
  | typeof NameCases._upper;

export type NamingSeedLike = string | NamingSeed;

export interface NamingResult {
  name: string;
  object?: CasedObjectName;
  candidates?: string[];
  reason?: string;
  warn: boolean;
}

/**
 * describing examples as input of "there once was 12 girls that i UsedToKnow"
 */
export interface CasedObjectName {
  flat: string;
  /**
   * there_once_was_12_girls_that_i_used_to_know
   */
  snake: string;
  _snake: string;
  camel: string;
  _camel: string;
  pascal: string;
  _pascal: string;
  kebab: string;
  upper_snake: string;
  _upper_snake: string;
  upper: string;
  _upper: string;
}
