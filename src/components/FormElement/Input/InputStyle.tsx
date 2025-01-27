import { css, CSSProp } from "styled-components";
import {
  TextInputContainerProps,
  TextInputStyleProps,
} from "../../../types/components.types";

export const getStyle = (props: TextInputContainerProps): CSSProp => {
  return css`
    position: relative;
    display: flex;
    gap: 8px;
    width: ${props.width};
    border: 1px solid ${props.$actualColors.border};
    border-radius: 10px;
    background-color: ${props.disabled
      ? props.$actualColors.bgSoft
      : props.$actualColors.bgWhite};
    &:hover {
      outline: ${props.disabled
        ? "none"
        : `1px solid ${props.$actualColors.primaryHover}`};
    }
    &:focus,
    &:focus-within,
    &:-webkit-autofill {
      outline: 2px solid ${props.$actualColors.primaryFocus};
    }
  `;
};
export const getTextInputStyle = (props: TextInputStyleProps): CSSProp => {
  return css`
    width: 100%;
    border: none;
    padding: 8px;
    color: ${props.disabled
      ? props.$actualColors.textDisabled
      : props.$actualColors.text};
    border-radius: 10px;
    text-overflow: ellipsis;
    &::-webkit-scrollbar {
      background-color: transparent;
      width: 5px;
      height: 5px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${props.$actualColors.bgDisabled};
      border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb:hover {
      background-color: #555;
    }

    &::-webkit-scrollbar-track {
      background: #f1f1f1;
      border-radius: 10px;
    }
    &::placeholder {
      color: ${props.disabled
        ? props.$actualColors.textDisabled
        : props.$actualColors.textSoft};
    }
    &:focus {
      outline: none;
    }
    background-color: transparent;
  `;
};

export const getTextAreaStyle = (props: TextInputStyleProps): CSSProp => {
  return css`
    resize: none;
    padding-top: 20px;
  `;
};

export const getCounterStyle = (props: TextInputStyleProps): CSSProp => {
  return css`
    color: ${props.disabled
      ? props.$actualColors.textDisabled
      : props.$actualColors.text};
    position: absolute;
    padding: 8px 0 0 8px;
    width: 90%;
    font-size: 8px;
    border-radius: 10px 10px 0 0;
    background-color: ${props.disabled
      ? props.$actualColors.bgSoft
      : props.$actualColors.white};
  `;
};

export const getPwdButtonStyle = (props: TextInputStyleProps): CSSProp => {
  return css`
    cursor: ${props.disabled ? "default" : "pointer"};
    background-color: transparent;
    border: none;
    padding: 0 8px;
  `;
};

export const getLabelStyle = (props: TextInputStyleProps): CSSProp => {
  return css`
    cursor: ${props.disabled ? "default" : "pointer"};
  `;
};
