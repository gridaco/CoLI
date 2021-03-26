import { Function, Import } from "coli/lib";
import { Identifier } from "coli/lib/ast/identifier";
import { VariableDeclaration } from "coli/lib/declarations/variable";

// import React, { useEffect, useState } from "react"
new Import()
  .importDefault("React")
  .and(
    {
      import: "useEffect",
    },
    {
      import: "useState",
    }
  )
  .from("react");

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
const Appbar = new Function("Appbar").withParams(new Identifier("props"));

const callExpression = Appbar.call();

// THE FINAL OUTPUT MUST SEEM LIKE
/**
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
 * const Wrapper = styled.div``
 * const TitleAndAvatarWrapper = styled.div``
 * const Title = styled.h1``
 * const Message = styled.span``
 *
 * export default Appbar
 */
