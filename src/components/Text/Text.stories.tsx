import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Text from "./Text";

const meta: Meta<typeof Text> = {
  title: "Components/Text",
  component: Text,
};

export default meta;

type TextProps = React.ComponentProps<typeof Text>;

const Template: StoryFn<TextProps> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "This is a default text example.",
  className: "",
  tag: "p",
  fontWeight: 400,
  fontSize: "16px",
  color: "#2f3888",
  textAlign: "left",
  marginBottom: "16px",
};

export const CustomLink = Template.bind({});
CustomLink.args = {
  children: "This is a link text example.",
  className: "custom-link",
  tag: "a",
  fontWeight: 400,
  fontSize: "16px",
  color: "#2f3888",
  textAlign: "left",
  marginBottom: "16px",
};
