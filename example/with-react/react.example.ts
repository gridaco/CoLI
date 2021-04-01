import { Block, File, Function, Import, Return, Types } from "coli/lib";
import { Identifier } from "coli/lib/ast/identifier";
import { VariableDeclaration } from "coli/lib/declarations/variable";
import {
  JSXAtrribute,
  JSXElement,
  JSXExpression,
  JSXIdentifier,
} from "coli/lib/jsx";
import { stringfy } from "../../packages/export-string";
import { TaggedTemplateExpression } from "coli/lib/expressions/tagged-template-expression";
import { PropertyAccessExpression } from "coli/lib/expressions/property-access-exporession";
import { TemplateLiteral } from "coli/lib/ast/template-literal";
import { JSXOpeningElement } from "coli/lib/jsx/jsx-opening-element";
import { JSXClosingElement } from "coli/lib/jsx/jsx-closing-element";
import { JSXSelfClosingElement } from "coli/lib/jsx/jsx-self-closing-element";
const AppbarFile = new File({
  name: "Appbar.tsx",
  path: "src/components",
});

// import React, { useEffect, useState } from "react"
const importReact = new Import()
  .importDefault("React")
  .and("useEffect", "useState")
  .from("react");

// import styled from "@emotion/styled"
const inportStyled = new Import()
  .importDefault("styled")
  .from("@emotion/styled");

const styledIdentifier = new Identifier("styled");

const Wrapper = new VariableDeclaration("Wrapper", {
  initializer: new TaggedTemplateExpression(
    new PropertyAccessExpression(styledIdentifier, "div"),
    {
      template: new TemplateLiteral(`
        margin: 60px 20px;
      `),
    }
  ),
  kind: "const",
});

const TitleAndAvatarWrapper = new VariableDeclaration("TitleAndAvatarWrapper", {
  initializer: new TaggedTemplateExpression(
    new PropertyAccessExpression(styledIdentifier, "div"),
    {
      template: new TemplateLiteral(`
        display: flex;
        justify-content: space-between;
        align-items: center;
      `),
    }
  ),
  kind: "const",
});

const Title = new VariableDeclaration("Title", {
  initializer: new TaggedTemplateExpression(
    new PropertyAccessExpression(styledIdentifier, "div"),
    {
      template: new TemplateLiteral(`
        font-size: 36px;
      `),
    }
  ),
  kind: "const",
});

const Message = new VariableDeclaration("Message", {
  initializer: new TaggedTemplateExpression(
    new PropertyAccessExpression(styledIdentifier, "div"),
    {
      template: new TemplateLiteral(`
        color: #a4a4a4;
        font-size: 14px;
      `),
    }
  ),
  kind: "const",
});

/**
 * function Appbar(props: {
 *  title: string,
 *  message: string,
 *  avatar: string
 * }) {
 *  return <Wrapper>
 *      <TitleAndAvatarWrapper>
 *          <Title>{props.title}</Title>
 *          <Avatar src={props.avatar}/>
 *      </TitleAndAvatarWrapper>
 *      <Message>{props.message}</Message>
 *  </Wrapper>
 * }
 */

const wrapperJsxIdentifier = new JSXIdentifier("Wrapper");
const titleAndAvatarWrapperJsxIdentifier = new JSXIdentifier(
  "TitleAndAvatarWrapper"
);
const titleJsxIdentifier = new JSXIdentifier("Title");
const avatarJsxIdentifier = new JSXIdentifier("Avatar");
const messageJsxIdentifier = new JSXIdentifier("Message");

const AppbarBody = new Block().add(
  new Return(
    // Wrapper
    new JSXElement({
      openingElement: new JSXOpeningElement(wrapperJsxIdentifier),
      closingElement: new JSXClosingElement(wrapperJsxIdentifier),
      children: [
        // TitleAndAvatarWrapper
        new JSXElement({
          openingElement: new JSXOpeningElement(
            titleAndAvatarWrapperJsxIdentifier
          ),
          closingElement: new JSXClosingElement(
            titleAndAvatarWrapperJsxIdentifier
          ),
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
                    new PropertyAccessExpression(
                      new Identifier("props"),
                      "avatar"
                    )
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
    })
  )
);
const Appbar = new Function("Appbar")
  .withParams(
    new Identifier("props", {
      typeAnnotation: Types.struct({
        title: "string",
        message: "string",
        avatar: "string",
      }),
    })
  )
  .withBody(AppbarBody);

const callExpression = Appbar.call();

// region make file
AppbarFile.import(importReact.make(), inportStyled.make());
AppbarFile.declare(Appbar.make());
AppbarFile.declare(Wrapper, TitleAndAvatarWrapper, Title, Message);
// endregion make file

// console.log(JSON.stringify(AppbarFile.blocks, undefined, 2));

console.log(
  stringfy(AppbarFile.blocks, {
    language: "tsx",
    formatter: {
      use: "pritter",
      parser: "typescript",
    },
  })
);

// https://codesandbox.io/embed/trusting-mcnulty-hptuq
// THE FINAL OUTPUT MUST SEEM LIKE
/**
 *
 * // example
 * // <Appbar title={"Saturday Morning Mix"} avatar={"https://a.uguu.se/DjjsiLkC.png"} message={"Here are some tunes for you to start your morning. Mostly quiet and slow-beat, some of them are mood changer."}/>
 *
 * import React, { useEffect, useState } from "react"
 * import styled from "@emotion/styled"
 *
 * function Appbar(props: {
 *  title: string,
 *  message: string,
 *  avatar: string
 * }) {
 *  return <Wrapper>
 *      <TitleAndAvatarWrapper>
 *          <Title>{props.title}</Title>
 *          <Avatar src={props.avatar}/>
 *      </TitleAndAvatarWrapper>
 *      <Message>{props.message}</Message>
 *  </Wrapper>
 * }
 *
 *
 * const Wrapper = styled.div`
 *   margin: 60px 20px;
 * `;
 *
 * const TitleAndAvatarWrapper = styled.div`
 *   display: flex;
 *   justify-content: space-between;
 *   align-items: center;
 * `;
 *
 * const Title = styled.h1`
 *   font-size: 36px;
 * `;
 *
 * const Avatar = styled.img`
 *   margin-left: 20px;
 * `;
 *
 * const Message = styled.span`
 * color: #a4a4a4;
 * font-size: 14px;
 * `;
 *
 * export default Appbar
 */
