import { _EXPRESSION_JSX } from "../../_internal/node-name/expressions-name";
import { Expression } from "../../expressions/expression.base";
import { ColiObject } from "../../_abstract";

/**
 * <Text>{ "this is the jsx expression container area" }</Text>
 * <Text property={"this is also a jsx expression container"}/>
 */
export class JSXExpression extends Expression {
  constructor(readonly expression: ColiObject) {
    super(_EXPRESSION_JSX);
  }
}
