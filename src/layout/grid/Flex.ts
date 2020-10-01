import styled from "styled-components";
import { animated } from "react-spring";

export const Flex = styled.div<{
  flex?: number;
  row?: boolean;
  column?: boolean;
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
  display: ${(props) => (props.row || props.column ? "flex" : "block")};
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  align-items: ${(props) => props.align || "flex-start"};
  justify-content: ${(props) => props.justify || "flex-start"};
`;

export const AnimatedFlex = styled(animated(Flex))``;
