import { css, CSSProp } from "styled-components";
import { styleForViewport } from "../../helpers/css.helpers";
import { camelToDashCase, propsToArray } from "../../helpers/generic.helpers";
import { TextStyleProps } from "../../types/components.types";

const LinkStyle = (props: TextStyleProps): CSSProp => {
  return css`
    a {
      cursor: pointer;

      &:hover {
        color: #5e5e5e;
        text-decoration: ${props.textDecoration || "underline"};
      }
      &:active,
      &:focus,
      &:focus-within {
        color: #5e5e5e;
      }
    }
    ${props.tag === "a" &&
    css`
      cursor: pointer;

      &:hover {
        color: #5e5e5e;
        text-decoration: ${props.textDecoration || "underline"};
      }
      &:active,
      &:focus,
      &:focus-within {
        color: #5e5e5e;
      }
    `}
  `;
};

export const getTextStyle = (props: TextStyleProps): CSSProp => {
  const propArray = propsToArray(props);
  return css`
    font-family: ${props.fontFamily || "Helvetica, Arial, sans-serif"};
    margin: ${props.margin || 0};
    padding: ${props.padding || 0};
    font-weight: ${props.fontWeight || 400};
    font-style: ${props.fontStyle};
    text-decoration: ${props.textDecoration || "none"};
    font-size: ${props.fontSize || "16px"};
    line-height: ${props.lineHeight || "1.2"};
    color: ${props.color || "#1D1D1D"};
    text-align: ${props.textAlign || "left"};
    text-transform: ${props.textTransform};

    b,
    strong {
      font-weight: 600 !important;
    }

    ${LinkStyle(props)}
    ${propArray.map((el) => styleForViewport(props, camelToDashCase(el), el))}
  `;
};
