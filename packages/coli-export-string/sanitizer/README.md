# sanitizer is equivalent to lightweight formatter.

## Features

- divide lines

```ts
// from
`import "a";import "b";`;

// to
import "a";
import "b";
```
