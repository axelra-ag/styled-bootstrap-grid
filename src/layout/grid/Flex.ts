import styled, { css } from "styled-components";

type AlignProps = "baseline" | "flex-start" | "flex-end" | "stretch" | "center";
type JustifyProps =
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";

type AlignSelfProps =
    | "space-between"
    | "flex-start"
    | "flex-end"
    | "stretch"
    | "center"
    | "space-around";

export type FlexProps = {
  flex?: number;
  row?: boolean;
  column?: boolean;
  reverse?: "row-reverse" | "column-reverse";
  wrap?: "wrap" | "wrap-reverse" | "nowrap" | boolean;
  align?: AlignProps;
  alignSelf?: AlignSelfProps;
  justify?: JustifyProps;
  justifySelf?: JustifyProps;
  shrink?: number;
  background?: string;
  borderRadius?: number;
  borderTopRightRadius?: number;
  borderTopLeftRadius?: number;
  borderBottomRightRadius?: number;
  borderBottomLeftRadius?: number;
  padding?: number | string;
  horizontalPadding?: number;
  verticalPadding?: number;
  opacity?: number;
  width?: string | number;
  height?: string | number;
  zIndex?: number;
};

export const makeFlexCSS = ({
                              flex,
                              wrap,
                              align,
                              justify,
                              justifySelf,
                              row,
                              column,
                              reverse,
                              alignSelf,
                              shrink,
                              background,
                              horizontalPadding,
                              verticalPadding,
                              padding,
                              borderRadius,
                              opacity,
                              borderTopRightRadius,
                              borderTopLeftRadius,
                              borderBottomRightRadius,
                              borderBottomLeftRadius,
                              width,
                              height,
                              zIndex,
                            }: FlexProps) => css`
  display: flex; 
  ${flex && `flex: ${flex}`};
  ${wrap && `flex-wrap: ${typeof wrap === "boolean" ? "wrap" : wrap}`};
  ${align && `align-items: ${align}`};
  ${justify && `justify-content: ${justify};`};
  ${justifySelf && `justify-self: ${justifySelf};`};
  ${alignSelf && `align-self: ${alignSelf};`};
  ${shrink && `flex-shrink: ${shrink};`};
  ${background && `background-color: ${background};`};
  ${zIndex && `z-index: ${zIndex};`};
  ${padding &&
`padding: ${typeof padding === "number" ? `${padding}px` : padding};`};
  ${horizontalPadding && `padding-left: ${horizontalPadding}px`};
  ${horizontalPadding && `padding-right: ${horizontalPadding}px`};
  ${verticalPadding && `padding-top: ${verticalPadding}px`};
  ${verticalPadding && `padding-bottom: ${verticalPadding}px`};
  ${borderRadius && `border-radius: ${borderRadius}px;`};
  ${borderTopRightRadius &&
`border-top-right-radius: ${borderTopRightRadius}px;`};
  ${borderTopLeftRadius && `border-top-left-radius: ${borderTopLeftRadius}px;`};
  ${borderBottomRightRadius &&
`border-bottom-right-radius: ${borderBottomRightRadius}px;`};
  ${borderBottomLeftRadius &&
`border-bottom-left-radius: ${borderBottomLeftRadius}px;`};
  ${width && `width: ${typeof width === "number" ? `${width}px` : width};`};
  ${height &&
`height: ${typeof height === "number" ? `${height}px` : height};`};
  ${opacity && `opacity: ${opacity};`};
  ${(row || column || reverse) &&
`flex-direction: ${row ? "row" : column ? "column" : reverse}`};
`;

export const Flex = styled.div<FlexProps>`
  ${({ ...props }) => makeFlexCSS(props)};
`;
