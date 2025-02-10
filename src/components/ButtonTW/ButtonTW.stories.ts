import { Meta, StoryObj } from "@storybook/react";
import Button from "./ButtonTW";
import "../../style.css";

const meta: Meta<typeof Button> = {
  title: "Components/ButtonTW",
  component: Button,
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary"],
    },
    label: {
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: "Primary Button",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    label: "Secondary Button",
    variant: "secondary",
  },
};
