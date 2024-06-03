// components/Card.tsx

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

interface CardProps
  extends SpaceProps,
    ColorProps,
    LayoutProps,
    TypographyProps,
    BorderProps {
  variant?: "solid" | "soft" | "outlined";
}

const Card = styled.div<CardProps>`
  ${variant({
    scale: "cards",
    variants: theme.cards,
  })}
  ${space}
  ${color}
  ${layout}
  ${typography}
  ${border}
`;

export default Card;
