import styled from "styled-components";

export type FlexProps = {
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
  relative?: boolean;
  height?: string;
};

export const Flex = styled.div<FlexProps>`
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

  ${({ row }) =>
    row &&
    `display: flex;
     flex-direction: row; 
  `};

  ${({ column }) =>
    column &&
    `display: flex;
     flex-direction: column; 
  `};

  ${({ relative }) =>
      relative &&
      `position: relative;
  `};

  ${({ height }) =>
      height &&
      `height: ${height};
  `};
  box-sizing: border-box;
`;
