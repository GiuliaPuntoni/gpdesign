import React, { forwardRef } from "react";
import { getTextStyle } from "./TextStyle";
import showdown from "showdown";
import {
  createContainers,
  createMarkup,
  generateWrapper,
} from "../../helpers/element.helpers";
import { TEXT_TAG } from "../../constants/generic.const";
import GlobalStylesWrapper from "../../config/global.styles";
import { TextProps } from "../../types/components.types";

const Containers = createContainers(TEXT_TAG, getTextStyle);

const Text = forwardRef<HTMLDivElement, TextProps>((props, ref) => {
  const {
    children,
    className = "",
    tag = "p",
    fontWeight,
    fontStyle,
    textDecoration,
    fontSize,
    color,
    lineHeight,
    textAlign,
    textTransform,
    noParsed = false,
    fontFamily,
    margin,
    padding,
    tablet,
    desktop,
    ...otherProps
  } = props;

  const Container = generateWrapper(Containers, tag);

  if (typeof children !== "string" || noParsed) {
    return (
      <GlobalStylesWrapper>
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
          fontFamily={fontFamily}
          margin={margin}
          padding={padding}
          tablet={tablet}
          desktop={desktop}
          {...otherProps}
        >
          {children}
        </Container>
      </GlobalStylesWrapper>
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
    <GlobalStylesWrapper>
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
        fontFamily={fontFamily}
        margin={margin}
        padding={padding}
        tablet={tablet}
        desktop={desktop}
        {...otherProps}
      />
    </GlobalStylesWrapper>
  );
});

Text.displayName = "Text";

export default React.memo(Text);
