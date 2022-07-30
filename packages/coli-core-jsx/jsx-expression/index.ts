import { _internal, ColiObject, Expression } from "@coli.codes/core";

/**
 * <Text>{ "this is the jsx expression container area" }</Text>
 * <Text property={"this is also a jsx expression container"}/>
 */
export class JSXExpression extends Expression {
  constructor(readonly expression: ColiObject) {
    super(_internal._EXPRESSION_JSX);
  }
}
