import type { Meta, StoryObj } from "@storybook/react";
import Typography from "@/components/Typography";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";

const withThemeProvider = (Story: any, context: any) => (
  <ThemeProvider theme={theme}>
    <Story {...context} />
  </ThemeProvider>
);

const meta = {
  title: "Typography",
  component: Typography,
  decorators: [withThemeProvider],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    level: {
      control: {
        type: "radio",
      },
      options: ["heading1", "heading2", "heading3", "body", "caption"],
      description: "Typography level, defining its styling.",
    },
    children: {
      control: "text",
      description: "The content of the typography.",
    },
    color: {
      control: { type: "color" },
      type: "string",
      description: "Color of the typography.",
    },
    fontSize: {
      control: { type: "text" },
      description: "Font size of the typography.",
    },
    fontWeight: {
      control: {
        type: "radio",
      },
      options: ["normal", "bold", "bolder", "lighter"],
      description: "Font weight of the typography.",
    },
    textAlign: {
      control: { type: "radio" },
      options: ["left", "center", "right", "justify"],
      description: "Text alignment of the typography.",
    },
    lineHeight: {
      control: { type: "text" },
      description: "Line height of the typography.",
    },
    margin: {
      control: { type: "text" },
      description: "Margin around the typography.",
    },
    padding: {
      control: { type: "text" },
      description: "Padding around the typography.",
    },
  },
  args: {
    level: "body",
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Heading1: Story = {
  args: {
    children: "Heading 1",
    level: "heading1",
    color: "black",
  },
};

export const Heading2: Story = {
  args: {
    children: "Heading 2",
    level: "heading2",
    color: "black",
  },
};

export const Heading3: Story = {
  args: {
    children: "Heading 3",
    level: "heading3",
    color: "black",
  },
};

export const Body: Story = {
  args: {
    children: "Body Text",
    level: "body",
    color: "black",
  },
};

export const Caption: Story = {
  args: {
    children: "Caption Text",
    level: "caption",
    color: "black",
  },
};
