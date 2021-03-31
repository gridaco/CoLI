import { stringfy } from "@coli/export-string";
import { JSXElement, JSXIdentifier } from "coli/lib/jsx";
import { JSXClosingElement } from "coli/lib/jsx/jsx-closing-element";
import { JSXExpression } from "coli/lib/jsx/jsx-expression";
import { JSXOpeningElement } from "coli/lib/jsx/jsx-opening-element";
import { JSX } from "coli/lib/builders/jsx";

const wrapperJsxIdentifier = new JSXIdentifier("Wrapper");
const titleAndAvatarWrapperJsxIdentifier = new JSXIdentifier(
  "TitleAndAvatarWrapper"
);
const titleJsxIdentifier = new JSXIdentifier("Title");

/**
 * <Wrapper>
 *      <TitleAndAvatarWrapper>
 *          <Title>{props.title}</Title>
 *          <Avatar src={props.avatar}/>
 *      </TitleAndAvatarWrapper>
 *      <Message>{props.message}</Message>
 *  </Wrapper>
 */

const jsx = new JSXElement({
  openingElement: new JSXOpeningElement(wrapperJsxIdentifier),
  closingElement: new JSXClosingElement(wrapperJsxIdentifier),
  children: [
    new JSXElement({
      openingElement: new JSXOpeningElement(titleAndAvatarWrapperJsxIdentifier),
      closingElement: new JSXClosingElement(titleAndAvatarWrapperJsxIdentifier),
      children: [
        new JSXElement({
          openingElement: new JSXOpeningElement(titleJsxIdentifier),
          closingElement: new JSXClosingElement(titleJsxIdentifier),
        }),
      ],
    }),
  ],
});

console.log(
  stringfy(jsx, {
    language: "tsx",
  })
);

// BUILDER

// <div></div>
const div1 = JSX.tag("div");

// <div/>
const div2 = JSX.tag("div", {
  selfClosing: true,
});

JSX.div()(
  JSX.div()(
    JSX.h1()(""),
    JSX.p()(`
    `)
  ),
  JSX.h1(),
  JSX.h1()
);
