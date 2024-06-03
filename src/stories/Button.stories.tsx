import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Button from "@/components/Button";

const meta = {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: {
      control: { type: "color" },
      type: "string",
      description: "Background color of the button.",
    },
    variant: {
      control: {
        type: "radio",
      },
      options: ["primary", "secondary", "danger"],
      description: "Variant of the button, defining its styling.",
    },
    children: {
      control: "text",
      description: "The content of the button.",
    },
    onClick: {
      action: "clicked",
      description: "Click handler for the button.",
    },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Primary Button",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary Button",
    variant: "secondary",
  },
};

export const Danger: Story = {
  args: {
    children: "Danger Button",
    variant: "danger",
  },
};
