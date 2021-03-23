## Import for ES

> js, ts, jsx, tsx, vue, svelte

```js
const m = require("module");

import * as m from "module";

// with `allowSyntheticDefaultImports`
import m from "module";
```

## Import for dart

> dart

```dart
import 'dart:html';

import 'package:test/test.dart';

import 'package:lib2/lib2.dart' as lib2;

// Import only foo.
import 'package:lib1/lib1.dart' show foo;

// Import all names EXCEPT foo.
import 'package:lib2/lib2.dart' hide foo;
```

[reference](https://dart.dev/guides/language/language-tour#using-libraries)
