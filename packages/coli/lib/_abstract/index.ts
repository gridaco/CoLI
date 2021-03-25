interface ColiObject {
  type: // declrarations
  | "ImportDeclaration"
    | "FunctionDeclaration"
    // expressions
    | "CallExpression"
    // specifiers
    | "ImportSpecifier"
    | "ImportDefaultSpecifier"
    // statements
    | "ExpressionStatement"
    | "BlockStatement";
}
