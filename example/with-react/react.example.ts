import { Block, File, Function, Import, Return, Types } from "coli/lib";
import { Identifier } from "coli/lib/ast/identifier";
import { VariableDeclaration } from "coli/lib/declarations/variable";
import { JSXElement } from "coli/lib/jsx";
import { stringfy } from "../../packages/export-string";

const AppbarFile = new File({
  name: "Appbar.tsx",
  path: "src/components",
});

// import React, { useEffect, useState } from "react"
const importReact = new Import()
  .importDefault("React")
  .and("useEffect", "useState")
  .from("react");

const inportStyled = new Import()
  .importDefault("styled")
  .from("@emotion/styled");

const Wrapper = new VariableDeclaration("Wrapper");
const TitleAndAvatarWrapper = new VariableDeclaration("TitleAndAvatarWrapper");
const Title = new VariableDeclaration("Title");
const Message = new VariableDeclaration("Message");

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

const AppbarBody = new Block().add(new Return(new JSXElement("div")));
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

console.log(
  stringfy(AppbarFile.blocks, {
    language: "tsx",
  })
);

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
