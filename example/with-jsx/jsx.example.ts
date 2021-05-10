import { stringfy } from "@coli.codes/export-string";
import {
  JSX,
  JSXOpeningElement,
  JSXClosingElement,
  JSXAtrribute,
  JSXElement,
  JSXExpression,
  JSXIdentifier,
  PropertyAccessExpression,
  JSXSelfClosingElement,
  VariableDeclaration,
  Identifier,
  ast,
} from "coli";

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
const customTagBuilder = JSX.tag("div", {
  children: [
    JSX.tag("h1", {
      children: [JSX.text("heading 1")],
    }),
    JSX.image({
      attributes: [
        new JSXAtrribute(
          "src",
          new ast.Literal("https://example.com/image.png")
        ),
      ],
    }),
  ],
});

console.log(
  stringfy(customTagBuilder.make(), {
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
const jsxBuiltWithBuilder = JSX.div({
  children: [
    JSX.div({
      children: [
        JSX.text("plain text"),
        JSX.exp(new VariableDeclaration("name")),
        JSX.h1({
          child: JSX.text("heading"),
        }),
        JSX.p(),
      ],
    }),
    JSX.h2(),
    JSX.h3(),
  ],
});

console.log(
  stringfy(jsxBuiltWithBuilder.make(), {
    language: "tsx",
  })
);
