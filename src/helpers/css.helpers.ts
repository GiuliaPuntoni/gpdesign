import { css } from "styled-components";
import { VIEWPORT_ARRAY } from "../constants/generic.const";
import { camelToDashCase } from "./generic.helpers";

export const cssStyle = (propsArray: string[], props: Record<string, any>) => {
  const excludeList = [
    "className",
    "id",
    "children",
    "tag",
    "target",
    "$desktop",
    "$tablet",
    "$backgroundImage",
  ];
  return propsArray.map((el: string) => {
    if (excludeList.includes(el)) {
      return null;
    }
    return el
      ? css`
          ${camelToDashCase(el)}: ${props[el] || null};
        `
      : null;
  });
};

export const styleForViewport = (
  props: any,
  cssPropName: string,
  propsName: string
) => {
  return VIEWPORT_ARRAY.map(({ key, value }) => {
    return props[key]
      ? css`
          @media (min-width: ${value}) {
            ${cssPropName}: ${props[key]?.[propsName] || null};
          }
        `
      : null;
  });
};

export const styleForViewportBackground = (
  props: any,
  cssPropName: string,
  propsName: string
) => {
  return VIEWPORT_ARRAY.map(({ key, value }) => {
    return props[key] && props[key][propsName]
      ? css`
          @media (min-width: ${value}) {
            ${cssPropName}: url(${props[key]?.[propsName] || ""});
          }
        `
      : null;
  });
};
