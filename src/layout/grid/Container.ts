import styled, { css } from "styled-components";
import {
  __MEDIA_QUERY_BREAK_POINT,
  EXTRA_LARGE_DEVICES_MAX_WIDTH,
  LARGE_DEVICES_MAX_WIDTH,
  makeQuery,
  MEDIUM_DEVICES_MAX_WIDTH,
  SMALL_DEVICES_MAX_WIDTH,
} from "../../layout/media-query/Mobile";
import { GUTTER } from "../index";
import { animated } from "react-spring";

// with props use this:
// ${props => mediaQueries("md")(`width: ${props.width}px`)}
const Media = css`
  ${makeQuery(__MEDIA_QUERY_BREAK_POINT.SMALL)(`
      max-width: ${SMALL_DEVICES_MAX_WIDTH}px
  `)};

  ${makeQuery(__MEDIA_QUERY_BREAK_POINT.MEDIUM)(`
      max-width: ${MEDIUM_DEVICES_MAX_WIDTH}px;
  `)};

  ${makeQuery(__MEDIA_QUERY_BREAK_POINT.LARGE)(`
      max-width: ${LARGE_DEVICES_MAX_WIDTH}px
  `)};

  ${makeQuery(__MEDIA_QUERY_BREAK_POINT.EXTRA_LARGE)(`
      max-width: ${EXTRA_LARGE_DEVICES_MAX_WIDTH}px
  `)};
`;

const ContainerRoot = css`
  padding-right: ${GUTTER}px;
  padding-left: ${GUTTER}px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
`;

export const Container = styled.div<{ fluid?: boolean }>`
  ${(props) => (!props.fluid ? Media : null)};
  ${ContainerRoot};
`;

export const AnimatedContainer = styled(animated(Container))``;
