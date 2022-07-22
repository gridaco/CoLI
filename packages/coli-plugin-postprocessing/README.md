# CoLI Postprocessing plugin

This plugin allows you to add postprocessing features to CoLI for generating final output when stringfy is complete.
This is usefull for progressive code generation that includes async request like image fetching. You can first generate the template code, then replace resource uris conflic-free & easily with this plugin.

## Usage

Installation

```sh
yarn add coli-plugin-postprocessing
```

Register plugin

```ts
import Postprocessing from "coli-plugin-postprocessing";
import { Snippet, stringfy } from "coli";

const replacer = Postprocessing.create();
const key = replacer.reserve("url", "https://example.com/1.png");
const obj = Snippet.fromStatic(`<img src=\"${key}\" />`);
stringfy({
  obj,
  {
    plugins: [assetReplacer],
  }
});

// yields
// <img src="https://example.com/1.png" />


// async request
const url = await fetch("api.mysite.com/image-link").data.url // https://cdn.mysite.com/xxx.png
replacer.resolve("url", url);
stringfy({
  obj,
  {
    plugins: [assetReplacer],
  }
});

// yields
// <img src="https://cdn.mysite.com/xxx.png" />

```

Using as a standalone package

```ts
import Postprocessing from "coli-plugin-postprocessing";

// 1. instance based usage ------------------------------------------------------------------------
const replacer = Postprocessing.create();
const key = replacer.reserve("url", "https://example.com/1.png");
const content = key; // => https://example.com/1.png

// async request
const url = await fetch("api.mysite.com/image-link").data.url; // https://cdn.mysite.com/xxx.png
replacer.resolve("url", url);
replacer.replace(content); // => https://cdn.mysite.com/xxx.png

// 2. api based usage ----------------------------------------------------------------------------
const hash = Postprocessing.hash("url");
const content = `${hash}`;
Postprocessing.replace("url", "https://google.com");
```

Using global instance

```ts
// global processor for images
Postprocessing.create("images");
Postprocessing.use("images");

// or with upsert
Postprocessing.use("images", { upsert: true });

// or with configuration
Postprocessing.configure().upsert(true);
Postprocessing.use("images");
```
