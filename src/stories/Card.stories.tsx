import type { Meta, StoryObj } from "@storybook/react";
import Card from "@/components/Card";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";

const withThemeProvider = (Story, context) => (
  <ThemeProvider theme={theme}>
    <Story {...context} />
  </ThemeProvider>
);

const meta = {
  title: "Card",
  component: Card,
  decorators: [withThemeProvider],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
      options: ["solid", "soft", "outlined"],
      description: "Variant of the card, defining its styling.",
    },
    children: {
      control: "text",
      description: "The content of the card.",
    },
    bg: {
      control: { type: "color" },
      description: "Background color of the card.",
    },
    padding: {
      control: { type: "text" },
      description: "Padding inside the card.",
    },
    margin: {
      control: { type: "text" },
      description: "Margin around the card.",
    },
  },
  args: {
    variant: "outlined",
    padding: "36px",
    margin: "16px",
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    children: "This is a solid card",
    variant: "solid",
  },
};

export const Soft: Story = {
  args: {
    children: "This is a soft card",
    variant: "soft",
  },
};

export const Outlined: Story = {
  args: {
    children: "This is an outlined card",
    variant: "outlined",
  },
};
