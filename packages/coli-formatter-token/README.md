# Coli AST Formatter.

> This is a package to format a coli tree with a extra token injected. this does not outputs a string, but a coli tree.

## Use case.

this package is initially designed for integration with [@code-ui](https://github.com/gridaco/code-like-ui), to enable using very same coli syntax to build a code-ui. the problem was, coli core does not contain any raw token information such as `{` or `<`. which means if you define a object-literal expression, it will contain only the data that is included inside `{` and `}` based on its output. But @code-ui requires full syntax with all raw tokens, still using the same coli object. to pollyfill this gap witout stringfy & re-parsing, this package injects the raw token as a ast, so that the same format can be used universally.
