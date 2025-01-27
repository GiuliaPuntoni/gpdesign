import { COLORS } from "../constants/colors.const";
import { ThemeColors } from "../types/theme.types";

export const propsToArray = (props: { [key: string]: any }): string[] =>
  Object.keys(props);

export const camelToDashCase = (text: string): string =>
  text
    .replace(/^\$/, "")
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .toLowerCase();

export const colorThemePaletteCreate = (
  themeColors: ThemeColors | undefined
) => {
  if (themeColors) {
    return {
      ...COLORS,
      ...Object.fromEntries(
        Object.entries(themeColors).filter(([key]) => key in COLORS)
      ),
    };
  } else {
    return COLORS;
  }
};
