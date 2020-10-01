import styled, { css } from "styled-components";
import { __MEDIA_QUERY_BREAK_POINT, makeQuery } from "../media-query/Mobile";
import { GUTTER } from "../index";

const NUMBER_OF_COLUMNS = 12;
type ColAttribute = number | boolean | "auto";

const getBreakPoint = (
  sm?: ColAttribute,
  md?: ColAttribute,
  lg?: ColAttribute,
  xl?: ColAttribute
): __MEDIA_QUERY_BREAK_POINT | null => {
  if (sm) return __MEDIA_QUERY_BREAK_POINT.SMALL;
  if (md) return __MEDIA_QUERY_BREAK_POINT.MEDIUM;
  if (lg) return __MEDIA_QUERY_BREAK_POINT.LARGE;
  if (xl) return __MEDIA_QUERY_BREAK_POINT.EXTRA_LARGE;
  return null;
};

const getDimension = (n: number) => {
  return (n / NUMBER_OF_COLUMNS) * 100;
};

const getFlex = (t: ColAttribute) =>
  typeof t === "number" ? `${getDimension(t as number)}%` : "auto";

const getMaxWidth = (t: ColAttribute) =>
  typeof t === "number" ? `${getDimension(t as number)}%` : "100%";

const getWidth = (t: ColAttribute) => (typeof t === "number" ? `100%` : "auto");

const getMediaQuery = (
  breakPoint: __MEDIA_QUERY_BREAK_POINT,
  t?: ColAttribute
): string | null => {
  if (!breakPoint) return null;
  if (!t) return null;
  if (typeof t === "boolean") {
    return makeQuery(breakPoint)(SimpleCol);
  }
  return makeQuery(breakPoint)(`
      flex: 0 0 ${getFlex(t as ColAttribute)}; 
      max-width: ${getMaxWidth(t as ColAttribute)};
      width: ${getWidth(t as ColAttribute)};  
  `);
};

const computeOffset = (
  sm?: ColAttribute,
  md?: ColAttribute,
  lg?: ColAttribute,
  xl?: ColAttribute,
  offset?: number
): string => {
  const breakPoint = getBreakPoint(sm, md, lg, xl);
  if (!breakPoint) return "";
  if (!sm && !md && !lg && !xl) return "";
  if (!offset) return "";
  return makeQuery(breakPoint)(
    `margin-left: ${getDimension(offset as number)}%`
  );
};

const getDefaultColCSS = (col: number) => css`
  flex: 0 0 ${getDimension(col)}%;
  max-width: ${getDimension(col)}%;
`;

const ColRoot = css`
  position: relative;
  padding: 0 ${GUTTER}px;
  width: 100%;
`;

const SimpleCol = css`
  flex-basis: 0;
  flex-grow: 1;
  min-width: 0;
  max-width: 100%;
`;
export const Col = styled.div<{
  sm?: ColAttribute;
  md?: ColAttribute;
  lg?: ColAttribute;
  xl?: ColAttribute;
  xs?: number | boolean;
  order?: number;
  offset?: number;
}>`
  ${({ sm }) => getMediaQuery(__MEDIA_QUERY_BREAK_POINT.SMALL, sm)};
  ${({ md }) => getMediaQuery(__MEDIA_QUERY_BREAK_POINT.MEDIUM, md)};
  ${({ lg }) => getMediaQuery(__MEDIA_QUERY_BREAK_POINT.LARGE, lg)};
  ${({ xl }) => getMediaQuery(__MEDIA_QUERY_BREAK_POINT.EXTRA_LARGE, xl)};
  ${({ sm, md, lg, xl }) => !sm && !md && !lg && !xl && SimpleCol};
  ${({ sm, md, lg, xl, offset }) => computeOffset(sm, md, lg, xl, offset)};
  ${({ xs }) =>
    xs
      ? typeof xs === "number"
        ? getDefaultColCSS(xs as number)
        : SimpleCol
      : ""};
  ${({ order }) =>
    order &&
    `order: ${order};
  `}
  ${ColRoot};
`;
