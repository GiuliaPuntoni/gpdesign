import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Flex from "./Flex";

const meta: Meta<typeof Flex> = {
  title: "Components/Flex",
  component: Flex,
};

export default meta;

type FlexProps = React.ComponentProps<typeof Flex>;

const Template: StoryFn<FlexProps> = (args) => <Flex {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "This is a default flex example.",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "red",
  borderRadius: "10px",
  padding: "20px",
  desktop: {
    padding: "10px 5px",
    backgroundColor: "blue",
  },
};
