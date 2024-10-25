import { css, CSSProp } from "styled-components";
import {
  cssStyle,
  styleForViewport,
  styleForViewportBackground,
} from "../../helpers/css.helpers";
import { camelToDashCase, propsToArray } from "../../helpers/generic.helpers";
import { FlexStyleProps } from "../../types/components.types";

export const getFlexStyle = (props: FlexStyleProps): CSSProp => {
  const propArray = propsToArray(props);
  return css`
    display: ${props.display || "flex"};
    background-image: url(${props.backgroundImage});
    ${styleForViewportBackground(props, "background-image", "backgroundImage")}
    ${cssStyle(propArray, props)}
    ${propArray.map((el) => styleForViewport(props, camelToDashCase(el), el))}
  `;
};
