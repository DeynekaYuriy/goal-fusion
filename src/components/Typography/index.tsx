import styled from "styled-components";
import {
  SpaceProps,
  TypographyProps as StyledTypographyProps,
  color,
  space,
  typography,
} from "styled-system";

interface TypographyProps extends SpaceProps, StyledTypographyProps {
  level?: "heading1" | "heading2" | "heading3" | "body" | "caption";
}

const Typography = styled.div<TypographyProps>`
  ${(props) => props.theme.typography[props.level || "body"]}
  ${space}
  ${color}
  ${typography}
`;

export default Typography;
