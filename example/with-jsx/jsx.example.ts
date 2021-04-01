import { stringfy } from "@coli/export-string";
import {
  JSXAtrribute,
  JSXElement,
  JSXExpression,
  JSXIdentifier,
} from "coli/lib/jsx";
import { JSXClosingElement } from "coli/lib/jsx/jsx-closing-element";
import { JSXOpeningElement } from "coli/lib/jsx/jsx-opening-element";
import { JSX } from "coli/lib/builders/jsx";
import { PropertyAccessExpression } from "coli/lib/expressions/property-access-exporession";
import { Identifier } from "coli/lib/ast";
import { JSXSelfClosingElement } from "coli/lib/jsx/jsx-self-closing-element";
import { VariableDeclaration } from "coli/lib/declarations/variable";

const wrapperJsxIdentifier = new JSXIdentifier("Wrapper");
const titleAndAvatarWrapperJsxIdentifier = new JSXIdentifier(
  "TitleAndAvatarWrapper"
);
const titleJsxIdentifier = new JSXIdentifier("Title");
const avatarJsxIdentifier = new JSXIdentifier("Avatar");
const messageJsxIdentifier = new JSXIdentifier("Message");

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
    // TitleAndAvatarWrapper
    new JSXElement({
      openingElement: new JSXOpeningElement(titleAndAvatarWrapperJsxIdentifier),
      closingElement: new JSXClosingElement(titleAndAvatarWrapperJsxIdentifier),
      children: [
        // Title
        new JSXElement({
          openingElement: new JSXOpeningElement(titleJsxIdentifier),
          closingElement: new JSXClosingElement(titleJsxIdentifier),
          children: [
            new JSXExpression(
              new PropertyAccessExpression(new Identifier("props"), "title")
            ),
          ],
        }),
        // Avatar
        new JSXSelfClosingElement(avatarJsxIdentifier, {
          atrributes: [
            new JSXAtrribute(
              "src",
              new JSXExpression(
                new PropertyAccessExpression(new Identifier("props"), "avatar")
              )
            ),
          ],
        }),
      ],
    }),
    // Message
    new JSXElement({
      openingElement: new JSXOpeningElement(messageJsxIdentifier),
      closingElement: new JSXClosingElement(messageJsxIdentifier),
      children: [
        new JSXExpression(
          new PropertyAccessExpression(new Identifier("props"), "message")
        ),
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

console.log(
  stringfy(div2, {
    language: "tsx",
  })
);

/**
 * ```
 * <div>
 *  <div>
 *   plain text
 *   { let name }
 *   <h1>heading</h1>
 *  </div>
 *  <h2>heading</h2>
 *  <h3>heading</h3>
 * </div>
 * ```
 */
// const jsxBuiltWithBuilder = JSX.div()(
//   JSX.div()(
//     JSX.text("plain text"),
//     JSX.exp(new VariableDeclaration("name")),
//     JSX.h1()(JSX.text("heading")),
//     JSX.p()(`
//     `)
//   ),
//   JSX.h2(),
//   JSX.h3()
// );

// console.log(
//   stringfy(jsxBuiltWithBuilder, {
//     language: "tsx",
//   })
// );
