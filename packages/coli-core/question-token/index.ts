import { SyntaxKind } from "../_internal";

/**
 * rather question token is provided.
 * ```ts
 * interface Example {
 *    maybe?: "value" | undefined, // yes - `SyntaxKind.QuestionToken`
 *    sure: "value" // yes - `undefined`
 * }
 * ```
 */
export type QuestionToken = undefined | SyntaxKind.QuestionToken;
