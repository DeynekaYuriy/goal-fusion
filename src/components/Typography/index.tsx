// components/Typography.tsx

import styled from "styled-components";
import {
  space,
  color,
  typography,
  SpaceProps,
  ColorProps,
  TypographyProps as StyledTypographyProps,
} from "styled-system";

interface TypographyProps
  extends SpaceProps,
    ColorProps,
    StyledTypographyProps {
  level?: "heading1" | "heading2" | "heading3" | "body" | "caption";
}

const Typography = styled.div<TypographyProps>`
  ${space}
  ${color}
  ${(props) => props.theme.typography[props.level || "body"]}
`;

export default Typography;
