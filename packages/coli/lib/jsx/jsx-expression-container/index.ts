import { ColiObject } from "../../_abstract";

/**
 * <Text>{ "this is the jsx expression container area" }</Text>
 * <Text property={"this is also a jsx expression container"}/>
 */
export class JSXExpressionContainer {
  constructor(readonly expression: ColiObject) {}
}
