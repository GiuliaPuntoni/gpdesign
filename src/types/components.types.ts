import {
  DetailedHTMLProps,
  LabelHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";
import { INPUT_TYPES } from "./../constants/generic.const";
import { Tag, ViewportObj } from "./types";

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
  tablet?: ViewportObj;
  desktop?: ViewportObj;
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
}

export interface FlexProps {
  children: React.ReactNode;
  className?: string;
  tag?: Tag;
  backgroundImage?: string;
  tablet?: ViewportObj;
  desktop?: ViewportObj;
  [key: string]: any;
}

export interface FlexStyleProps {
  display?: string;
  backgroundImage?: string;
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
  type?: string;
  width?: string;
  iconLeft?: string;
  iconRight?: string;
  autoComplete?: boolean;
  textAreaValueLimit?: string;
  label?: string;
  maskChar?: string;
  mask?: string;
  maxLength?: string;
  rows?: string;
}

export interface TextInputStyleProps {
  disabled?: boolean;
}

export interface TextInputContainerProps {
  disabled?: boolean;
  width?: string;
}

export interface CounterProps {
  disabled?: boolean;
}

export interface TextAreaProps {
  rows?: string;
}

export interface TextInputContainerProps {
  width?: string;
}

export interface PasswordInputProps {
  className?: string;
  [key: string]: any;
}
