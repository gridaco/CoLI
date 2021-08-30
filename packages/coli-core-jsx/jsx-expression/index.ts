import { _EXPRESSION_JSX } from "@coli.codes/core/_internal/node-name/expressions-name";
import { Expression } from "@coli.codes/core/expressions/expression.base";
import { ColiObject } from "@coli.codes/core/_abstract";

/**
 * <Text>{ "this is the jsx expression container area" }</Text>
 * <Text property={"this is also a jsx expression container"}/>
 */
export class JSXExpression extends Expression {
  constructor(readonly expression: ColiObject) {
    super(_EXPRESSION_JSX);
  }
}
