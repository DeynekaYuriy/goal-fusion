// components/Button.tsx

import styled from "styled-components";
import {
  space,
  color,
  layout,
  typography,
  border,
  variant,
  SpaceProps,
  ColorProps,
  LayoutProps,
  TypographyProps,
  BorderProps,
} from "styled-system";
import theme from "../../../theme";

interface ButtonProps
  extends SpaceProps,
    ColorProps,
    LayoutProps,
    TypographyProps,
    BorderProps {
  variant?: "primary" | "secondary" | "danger";
}

const Button = styled.button<ButtonProps>`
  ${space}
  ${color}
  ${layout}
  ${typography}
  ${border}
  ${variant({
    scale: "buttons",
    variants: theme.buttons,
  })}
  cursor: pointer;
  border: none;

  &:hover {
    opacity: 0.9;
  }
`;

export default Button;
