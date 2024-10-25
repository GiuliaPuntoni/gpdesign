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
  desktop: {
    fontSize: "20px",
  },
};

export const CustomLink = Template.bind({});
CustomLink.args = {
  children: "This is a link text example.",
  tag: "a",
};
