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
  sm?: ColAttribute,
  md?: ColAttribute,
  lg?: ColAttribute,
  xl?: ColAttribute
): string | null => {
  const breakPoint = getBreakPoint(sm, md, lg, xl);
  if (!breakPoint) return null;
  if (!sm && !md && !lg && !xl) return null;
  if (
    typeof sm === "boolean" ||
    typeof md === "boolean" ||
    typeof lg === "boolean" ||
    typeof xl === "boolean"
  ) {
    return makeQuery(breakPoint)(SimpleCol);
  }
  return makeQuery(breakPoint)(`
      flex: 0 0 ${getFlex((sm || md || lg || xl) as ColAttribute)}; 
      max-width: ${getMaxWidth((sm || md || lg || xl) as ColAttribute)};
      width: ${getWidth((sm || md || lg || xl) as ColAttribute)};  
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
  col?: number | boolean;
  order?: number;
  offset?: number;
}>`
  ${({ sm, md, lg, xl }) => getMediaQuery(sm, md, lg, xl) || SimpleCol};
  ${({ sm, md, lg, xl, offset }) => computeOffset(sm, md, lg, xl, offset)};
  ${({ col }) =>
    col
      ? typeof col === "number"
        ? getDefaultColCSS(col as number)
        : SimpleCol
      : ""};
  ${({ order }) =>
    order &&
    `order: ${order};
  `}
  ${ColRoot};
`;
