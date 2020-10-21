# CoLI
Computer Language Interface (node, dart, css, html, python)


## Supported platforms
- NodeJS

## Supported gen target languages
- JSX / TSX
- JS / TS
- Dart (+ Flutter)
- CSS
- SCSS
- XML
- HTML


## CoLI Node implementation.

**jsx building**
```
div(div("content"))

>>> <div>
>>>   <div>
>>>     content  
>>>   </div>
>>> </div>
```


**dart variable declaration**
```
const file = new File("main.dart")
file.add(Variable.const("someVariable", "hi there!", CoLITypes.String))

// main.dart
>>> final String someVariable = "hi there!";
```
> to check work around for generating flutter code - checkout [flutter-builder](https://github.com/bridgedxyz/flutter-builder)
