import {FlattenSimpleInterpolation} from "styled-components";

export const SMALL_DEVICES_BREAK_POINT = 576;
export const SMALL_DEVICES_MAX_WIDTH = 540;
export const MEDIUM_DEVICES_BREAK_POINT = 768;
export const MEDIUM_DEVICES_MAX_WIDTH = 720;
export const LARGE_DEVICES_BREAK_POINT = 992;
export const LARGE_DEVICES_MAX_WIDTH = 960;
export const EXTRA_LARGE_DEVICES_BREAK_POINT = 1200;
export const EXTRA_LARGE_DEVICES_MAX_WIDTH = 1140;

export enum __MEDIA_QUERY_BREAK_POINT {
  SMALL = "SMALL",
  MEDIUM = "MEDIUM",
  LARGE = "LARGE",
  EXTRA_LARGE = "EXTRA_LARGE"
}

const breaks = {
  [__MEDIA_QUERY_BREAK_POINT.SMALL]: SMALL_DEVICES_BREAK_POINT,
  [__MEDIA_QUERY_BREAK_POINT.MEDIUM]: MEDIUM_DEVICES_BREAK_POINT,
  [__MEDIA_QUERY_BREAK_POINT.LARGE]: LARGE_DEVICES_BREAK_POINT,
  [__MEDIA_QUERY_BREAK_POINT.EXTRA_LARGE]: EXTRA_LARGE_DEVICES_BREAK_POINT
};

export const makeQuery = (key: keyof typeof breaks) => {
  return (style: TemplateStringsArray | FlattenSimpleInterpolation | string) =>
    `@media only screen and (min-width: ${breaks[key]}px) { ${style} }`;
};
