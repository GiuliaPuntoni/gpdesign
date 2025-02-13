import { css, CSSProp } from "styled-components";
import { styleForViewport } from "../../helpers/css.helpers";
import { camelToDashCase, propsToArray } from "../../helpers/generic.helpers";
import { TextStyleProps } from "../../types/components.types";

const LinkStyle = (props: TextStyleProps): CSSProp => {
  return css`
    a {
      cursor: pointer;
      color: ${props.color || props.$actualColors.primary};

      &:hover {
        color: ${props.color || props.$actualColors.primaryHover};
        text-decoration: ${props.textDecoration || "underline"};
      }
      &:active,
      &:focus,
      &:focus-within {
        color: ${props.color || props.$actualColors.primaryFocus};
      }
    }
    ${props.tag === "a" &&
    css`
      cursor: pointer;
      color: ${props.color || props.$actualColors.primary};

      &:hover {
        color: ${props.color || props.$actualColors.primaryHover};
        text-decoration: ${props.textDecoration || "underline"};
      }
      &:active,
      &:focus,
      &:focus-within {
        color: ${props.color || props.$actualColors.primaryFocus};
      }
    `}
  `;
};

export const getTextStyle = (props: TextStyleProps): CSSProp => {
  const propArray = propsToArray(props);
  return css`
    font-family: ${props.fontFamily || "Helvetica, Arial, sans-serif"};
    font-weight: ${props.fontWeight || 400};
    font-style: ${props.fontStyle};
    text-decoration: ${props.textDecoration || "none"};
    font-size: ${props.fontSize || "16px"};
    line-height: ${props.lineHeight || "1.2"};
    color: ${props.color || props.$actualColors.text};
    text-align: ${props.textAlign || "left"};
    text-transform: ${props.textTransform};
    margin: 0;
    padding: 0;

    b,
    strong {
      font-weight: 600 !important;
    }

    ${LinkStyle(props)}
    ${propArray.map((el) => styleForViewport(props, camelToDashCase(el), el))}
  `;
};
