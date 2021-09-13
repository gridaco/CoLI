import { ColiObject, _internal } from "@coli.codes/core";
import * as fmts from "./formatters";

export function format(coli) {
  if (coli === undefined) {
    return;
  }

  if (Array.isArray(coli)) {
    return coli.map((c) => format(c));
  }

  if (coli instanceof ColiObject) {
    const formatter = _get_dedicated_formatter(coli.__type);
    return formatter(coli);
  }
}

type FormatterFunc = (c) => any[] | string | any;
function _get_dedicated_formatter(colitype): FormatterFunc {
  switch (colitype) {
    /** Declarations */
    case _internal._DECLARATION_FUNCTION:
      return fmts.astfmt_function_declaration;
    case _internal._DECLARATION_IMPORT:
      return fmts.astfmt_import_declaration;
    case _internal._DECLARATION_VARIABLE:
      return fmts.astfmt_variable_declaration;
    case _internal._DECLARATION_TYPE_ALIAS:
      // TODO:
      break;
    /** Statements */
    case _internal._STATEMENT_VARIABLE:
      // TODO:
      break;
    case _internal._STATEMENT_BLOCK:
      return fmts.astfmt_block;
    case _internal._STATEMENT_RETURN:
      return fmts.astfmt_return_statement;
    /** Expressions */
    case _internal._EXPRESSION_COMMENT:
      return fmts.astfmt_comment_expression;
    case _internal._EXPRESSION_TAGGED_TEMPLATE:
      return fmts.astfmt_tagged_template_expression;
    case _internal._EXPRESSION_PROPERTY_ACCESS:
      return fmts.astfmt_property_access_expression;
    case _internal._EXPRESSION_JSX:
      return fmts.astfmt_jsx_expression;
    /** Nodes */
    case _internal._NODE_IDENTIFIER:
      return fmts.astfmt_identifier;
    /** LITERALS */
    case _internal._LITERAL_TEMPLATE:
    case _internal._LITERAL_STRING:
    case _internal._LITERAL_NUMERIC:
    case _internal._LITERAL_BIGINT:
      return fmts.astfmt_literal;

    /** JSX */
    case _internal._ELEMENT_JSX:
      return fmts.astfmt_jsx_element;
    case _internal._JSX_ATTRIBUTE:
      return fmts.astfmt_jsx_attribute;
    case _internal._ELEMENT_JSX_CLOSING:
      return fmts.astfmt_jsx_closing_element;
    case _internal._ELEMENT_JSX_OPENING:
      return fmts.astfmt_jsx_opening_element;
    case _internal._ELEMENT_JSX_SELF_CLOSING:
      return fmts.astfmt_jsx_self_closing_element;
    case _internal._EXPRESSION_JSX:
      return fmts.astfmt_jsx_expression;
    case _internal._JSX_TEXT:
      return fmts.astfmt_jsx_text;
    /** Specifiers */
    case _internal._SPECIFIER_IMPORT:
      return fmts.astfmt_import_specifier;
    case _internal._SPECIFIER_DEFAULT_IMPORT:
      return fmts.astfmt_default_import;
    case _internal._ASSIGNMENT_EXPORT:
      return fmts.astfmt_export_assignment;
    case _internal._DECLARATION_INTERFACE:
      return fmts.astfmt_interface_declaration;
    case _internal._SIGNATURE_PROPERTY:
      return fmts.astfmt_property_signature;
    case _internal._EXPRESSION_LITERAL_OBJECT:
      return fmts.astfmt_object_literal_expression;
    case _internal._ASSIGNMENT_PROPERTY:
      return fmts.astfmt_property_assignment;
    case _internal._TYPE_REFERENCE:
      return fmts.astfmt_type_reference;
    case _internal._TYPE_LITERAL:
      return fmts.astfmt_literal_type;
    case _internal._TYPE_UNION:
      return fmts.astfmt_union_type;
  }
}
