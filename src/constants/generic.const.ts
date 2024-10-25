import { Tag } from "../types/types";

export const VIEWPORT_ARRAY: { key: string; value: string }[] = [
  { key: "tablet", value: "768px" },
  { key: "desktop", value: "1200px" },
];

export const TEXT_TAG: Tag[] = [
  "a",
  "p",
  "span",
  "label",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "b",
  "strong",
  "q",
  "li",
];

export const TAGS: Tag[] = [
  "a",
  "p",
  "span",
  "label",
  "div",
  "ul",
  "article",
  "section",
];

export const INPUT_TYPES = {
  checkbox: "checkbox",
  radio: "radio",
  text: "text",
  textarea: "textarea",
  masked: "masked",
  password: "password",
  number: "number",
};
