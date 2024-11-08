import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Input from "./Input";
import Flex from "../../Flex/Flex";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
};

export default meta;

type TextInputProps = React.ComponentProps<typeof Input>;

const Template: StoryFn<TextInputProps> = (args) => (
  <Flex direction="row" width="650px" gap="20px">
    <Input {...args} />
    <Input {...args} />
    <Input {...args} />
  </Flex>
);

export const Default = Template.bind({});
Default.args = {};
