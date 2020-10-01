import {css} from "styled-components";

/**
 * Z-Index
 * Several Bootstrap components utilize z-index, the CSS property that helps control layout by providing a third axis to arrange content.
 * We utilize a default z-index scale in Bootstrap that’s been designed to properly layer navigation, tooltips and popovers, modals, and more.
 * These higher values start at an arbitrary number, high and specific enough to ideally avoid conflicts.
 * We need a standard set of these across our layered components—tooltips, popovers, navbars, dropdowns, modals—so we can be reasonably consistent in the behaviors.
 */

export const ZIndexDropdown = css`
  z-index: 1000;
`;

export const ZIndexSticky = css`
  z-index: 1020;
`;

export const ZIndexFixed = css`
  z-index: 1030;
`;

export const ZIndexModal = css`
  z-index: 1050;
`;

export const ZIndexPopover = css`
  z-index: 1060;
`;

export const ZIndexTooltip = css`
  z-index: 1070;
`;
