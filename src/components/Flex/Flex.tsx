import React, { forwardRef } from "react";
import { getFlexStyle } from "./FlexStyle";
import {
  createContainers,
  generateWrapper,
} from "../../helpers/element.helpers";
import { TAGS } from "../../constants/generic.const";
import GlobalStylesWrapper from "../../config/global.styles";
import { FlexProps } from "../../types/components.types";

const Containers = createContainers(TAGS, getFlexStyle);

const Flex = forwardRef<HTMLDivElement, FlexProps>((props, ref) => {
  const {
    children,
    className = "",
    tag = "div",
    backgroundImage,
    tablet,
    desktop,
    ...otherProps
  } = props;

  const Container = generateWrapper(Containers, tag);

  return (
    <GlobalStylesWrapper>
      <Container
        className={`flex-element ${className}`}
        ref={ref}
        backgroundImage={backgroundImage}
        tablet={tablet}
        desktop={desktop}
        {...otherProps}
      >
        {children}
      </Container>
    </GlobalStylesWrapper>
  );
});

Flex.displayName = "Flex";

export default React.memo(Flex);
