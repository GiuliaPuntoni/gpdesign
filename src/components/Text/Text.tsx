import React, { forwardRef } from "react";
import styled from "styled-components";
import { getTextStyle } from "./TextStyle";
import showdown from "showdown";

type Tag = keyof JSX.IntrinsicElements;

interface TextProps {
  children: React.ReactNode;
  className?: string;
  tag?: Tag;
  fontWeight?: string | number;
  fontStyle?: string;
  textDecoration?: string;
  fontSize?: string;
  lineHeight?: string;
  color?: string;
  textAlign?: string;
  textTransform?: string;
  noParsed?: boolean;
  type?: string;
  fontFamily?: string;
  marginBottom?: string;
  [key: string]: any; // Per gestire altri prop dinamici
}

const TT_TAG: Tag[] = [
  "a",
  "p",
  "span",
  "label",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "strong",
  "q",
  "li",
];

const createContainers = (tagsArray: Tag[], style: any) => {
  const array: { name: string; container: any }[] = [];
  tagsArray.forEach((element) => {
    let container = styled.p`
      ${style}
    `;
    console.log("element", element);
    const name = `Container_${element}`;
    switch (element) {
      case "a":
        container = styled.a`
          ${style}
        `;
        break;
      case "p":
        container = styled.p`
          ${style}
        `;
        break;
      case "span":
        container = styled.span`
          ${style}
        `;
        break;
      case "label":
        container = styled.label`
          ${style}
        `;
        break;
      case "h1":
        container = styled.h1`
          ${style}
        `;
        break;
      case "h2":
        container = styled.h2`
          ${style}
        `;
        break;
      case "h3":
        container = styled.h3`
          ${style}
        `;
        break;
      case "h4":
        container = styled.h4`
          ${style}
        `;
        break;
      case "h5":
        container = styled.h5`
          ${style}
        `;
        break;
      case "strong":
        container = styled.strong`
          ${style}
        `;
        break;
      case "q":
        container = styled.q`
          ${style}
        `;
        break;
      case "li":
        container = styled.li`
          ${style}
        `;
        break;
    }
    array.push({ name, container });
  });
  return array;
};

const generateWrapper = (
  containers: { name: string; container: any }[],
  tag: Tag
) => {
  const index = containers.findIndex((el) => el.name === `Container_${tag}`);
  const ContainerWrapper =
    index === -1 ? containers[2].container : containers[index].container;
  return ContainerWrapper;
};

const createMarkup = (html: string) => {
  return { __html: html };
};

const Containers = createContainers(TT_TAG, getTextStyle);

const Text = forwardRef<HTMLDivElement, TextProps>((props, ref) => {
  const {
    children,
    className = "",
    tag = "p",
    fontWeight = "400",
    fontStyle,
    textDecoration,
    fontSize,
    color = "#2f3888",
    lineHeight,
    textAlign,
    textTransform,
    noParsed = false,
    type = "Text",
    fontFamily = '"Poppins", sans-serif',
    marginBottom,
    ...otherProps
  } = props;

  const Container = generateWrapper(Containers, tag);

  if (typeof children !== "string" || noParsed) {
    return (
      <Container
        className={`text-element ${className}`}
        fontWeight={fontWeight}
        fontStyle={fontStyle}
        textDecoration={textDecoration}
        fontSize={fontSize}
        lineHeight={lineHeight}
        color={color}
        ref={ref}
        textAlign={textAlign}
        tag={tag}
        textTransform={textTransform}
        type={type}
        fontFamily={fontFamily}
        marginBottom={marginBottom}
        {...otherProps}
      >
        {children}
      </Container>
    );
  }

  const noMorePsExt = {
    type: "output",
    filter: function (text: string) {
      const re = /<\/?p[^>]*>/gi;
      return text.replace(re, "");
    },
  };

  const converter = new showdown.Converter({ extensions: [noMorePsExt] });
  const html = converter.makeHtml(children);

  return (
    <Container
      dangerouslySetInnerHTML={createMarkup(html)}
      className={`text-element ${className}`}
      fontWeight={fontWeight}
      fontStyle={fontStyle}
      textDecoration={textDecoration}
      color={color}
      fontSize={fontSize}
      lineHeight={lineHeight}
      ref={ref}
      textAlign={textAlign}
      tag={tag}
      textTransform={textTransform}
      type={type}
      fontFamily={fontFamily}
      marginBottom={marginBottom}
      {...otherProps}
    />
  );
});

Text.displayName = "Text";

export default React.memo(Text);
