import { Tag, ViewportObj } from "./types";
import { ThemeColors } from "./theme.types";

export interface TextProps {
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
  fontFamily?: string;
  margin?: string;
  padding?: string;
  $tablet?: ViewportObj;
  $desktop?: ViewportObj;
  themeColors?: ThemeColors;
  [key: string]: any;
}

export interface TextStyleProps {
  tag?: string;
  fontFamily?: string;
  fontWeight?: string | number;
  fontStyle?: string;
  textDecoration?: string;
  fontSize?: string;
  lineHeight?: string;
  color?: string;
  textAlign?: string;
  textTransform?: string;
  margin?: string;
  padding?: string;
  $actualColors: ThemeColors;
}

export interface FlexProps {
  children: React.ReactNode;
  className?: string;
  tag?: Tag;
  backgroundImage?: string;
  $tablet?: ViewportObj;
  $desktop?: ViewportObj;
  [key: string]: any;
}

export interface FlexStyleProps {
  display?: string;
  $backgroundImage?: string;
}

export interface InputProps {
  name?: string;
  value?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  className?: string;
  id: string; // Richiesto
  type?: "text" | "textarea" | "masked" | "password" | "number";
  width?: string;
  iconLeft?: string;
  iconRight?: string;
  autoComplete?: boolean;
  textAreaValueLimit?: string;
  placeholder?: string;
  $ariaLabel?: string;
  maskChar?: string;
  mask?: string;
  maxLength?: string;
  rows?: string;
  $themeColors?: ThemeColors;
  rowLabel?: boolean;
  showLabel?: boolean;
}

export interface TextInputStyleProps {
  disabled?: boolean;
  $actualColors: ThemeColors;
}

export interface TextInputContainerProps {
  disabled?: boolean;
  width?: string;
  $actualColors: ThemeColors;
}

export interface TextInputProps {
  disabled?: boolean;
  $actualColors: ThemeColors;
}

export interface CounterProps {
  disabled?: boolean;
  $actualColors: ThemeColors;
}

export interface TextAreaProps {
  rows?: string;
  $actualColors: ThemeColors;
}

export interface TextInputContainerProps {
  width?: string;
  $actualColors: ThemeColors;
}

export interface PasswordInputProps {
  className?: string;
  $actualColors: ThemeColors;
  [key: string]: any;
}

export interface LabelProps {
  className?: string;
  $actualColors: ThemeColors;
  [key: string]: any;
}
