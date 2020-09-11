"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.ZIndexTooltip = exports.ZIndexPopover = exports.ZIndexModal = exports.ZIndexFixed = exports.ZIndexSticky = exports.ZIndexDropdown = void 0;
var styled_components_1 = require("styled-components");
/**
 * Z-Index
 * Several Bootstrap components utilize z-index, the CSS property that helps control layout by providing a third axis to arrange content.
 * We utilize a default z-index scale in Bootstrap that’s been designed to properly layer navigation, tooltips and popovers, modals, and more.
 * These higher values start at an arbitrary number, high and specific enough to ideally avoid conflicts.
 * We need a standard set of these across our layered components—tooltips, popovers, navbars, dropdowns, modals—so we can be reasonably consistent in the behaviors.
 */
exports.ZIndexDropdown = styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  z-index: 1000;\n"], ["\n  z-index: 1000;\n"])));
exports.ZIndexSticky = styled_components_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  z-index: 1020;\n"], ["\n  z-index: 1020;\n"])));
exports.ZIndexFixed = styled_components_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  z-index: 1030;\n"], ["\n  z-index: 1030;\n"])));
exports.ZIndexModal = styled_components_1.css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  z-index: 1050;\n"], ["\n  z-index: 1050;\n"])));
exports.ZIndexPopover = styled_components_1.css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  z-index: 1060;\n"], ["\n  z-index: 1060;\n"])));
exports.ZIndexTooltip = styled_components_1.css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  z-index: 1070;\n"], ["\n  z-index: 1070;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
