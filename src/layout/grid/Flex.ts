import styled from "styled-components";
import { animated } from "react-spring";

export const Flex = styled.div<{
  flex?: number;
  row?: boolean;
  column?: boolean;
  wrap?: "wrap" | "wrap-reverse" | "nowrap" | boolean;
  align?:
    | "baseline"
    | "flex-start"
    | "initial"
    | "flex-end"
    | "stretch"
    | "center"
    | "inherit";
  justify?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "initial"
    | "inherit";
}>`
  ${({ flex }) =>
    flex &&
    `flex: ${flex};
  `};

  ${({ wrap }) =>
    wrap &&
    `flex-wrap: ${typeof wrap === "boolean" ? "wrap" : wrap};
  `};

  ${({ align }) =>
    align &&
    `align-items: ${align};
  `};

  ${({ justify }) =>
    justify &&
    `justify-content: ${justify};
  `};

  display: ${(props) => (props.row || props.column ? "flex" : "block")};
  flex-direction: ${(props) => (props.row ? "row" : "column")};
`;

export const AnimatedFlex = styled(animated(Flex))``;
