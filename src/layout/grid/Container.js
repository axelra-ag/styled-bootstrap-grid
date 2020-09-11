"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.ContainerFluid = exports.Container = void 0;
var styled_components_1 = require("styled-components");
var Mobile_1 = require("../media-query/Mobile");
var Theme_1 = require("../../theme/Theme");
// with props use this:
// ${props => mediaQueries("md")(`width: ${props.width}px`)}
var Media = styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", ";\n\n  ", ";\n\n  ", ";\n\n  ", ";\n"], ["\n  ",
    ";\n\n  ",
    ";\n\n  ",
    ";\n\n  ",
    ";\n"])), Mobile_1.makeQuery(Mobile_1.__MEDIA_QUERY_BREAK_POINT.SMALL)("\n      max-width: " + Mobile_1.SMALL_DEVICES_MAX_WIDTH + "px\n  "), Mobile_1.makeQuery(Mobile_1.__MEDIA_QUERY_BREAK_POINT.MEDIUM)("\n      max-width: " + Mobile_1.MEDIUM_DEVICES_MAX_WIDTH + "px;\n  "), Mobile_1.makeQuery(Mobile_1.__MEDIA_QUERY_BREAK_POINT.LARGE)("\n      max-width: " + Mobile_1.LARGE_DEVICES_MAX_WIDTH + "px\n  "), Mobile_1.makeQuery(Mobile_1.__MEDIA_QUERY_BREAK_POINT.EXTRA_LARGE)("\n      max-width: " + Mobile_1.EXTRA_LARGE_DEVICES_MAX_WIDTH + "px\n  "));
var ContainerRoot = styled_components_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  padding-right: ", "px;\n  padding-left: ", "px;\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n"], ["\n  padding-right: ", "px;\n  padding-left: ", "px;\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n"])), Theme_1.GUTTER, Theme_1.GUTTER);
exports.Container = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", ";\n  ", ";\n"], ["\n  ", ";\n  ", ";\n"])), function (props) { return (!props.fluid ? Media : null); }, ContainerRoot);
exports.ContainerFluid = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  ", ";\n"], ["\n  ", ";\n"])), ContainerRoot);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
