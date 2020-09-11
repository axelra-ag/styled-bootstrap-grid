"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.Col = void 0;
var styled_components_1 = require("styled-components");
var Theme_1 = require("../../theme/Theme");
var Mobile_1 = require("../media-query/Mobile");
var NUMBER_OF_COLUMNS = 12;
var getBreakPoint = function (sm, md, lg, xl) {
    if (sm)
        return Mobile_1.__MEDIA_QUERY_BREAK_POINT.SMALL;
    if (md)
        return Mobile_1.__MEDIA_QUERY_BREAK_POINT.MEDIUM;
    if (lg)
        return Mobile_1.__MEDIA_QUERY_BREAK_POINT.LARGE;
    if (xl)
        return Mobile_1.__MEDIA_QUERY_BREAK_POINT.EXTRA_LARGE;
    return null;
};
var getDimension = function (n) {
    return (n / NUMBER_OF_COLUMNS) * 100;
};
var getFlex = function (t) {
    return Number.isInteger(t) ? getDimension(t) + "%" : "auto";
};
var getMaxWidth = function (t) {
    return Number.isInteger(t) ? getDimension(t) + "%" : "100%";
};
var getWidth = function (t) { return (Number.isInteger(t) ? "100%" : "auto"); };
var getMediaQuery = function (sm, md, lg, xl) {
    var breakPoint = getBreakPoint(sm, md, lg, xl);
    if (!breakPoint)
        return null;
    if (!sm && !md && !lg && !xl)
        return null;
    if (typeof sm === "boolean" ||
        typeof md === "boolean" ||
        typeof lg === "boolean" ||
        typeof xl === "boolean") {
        return Mobile_1.makeQuery(breakPoint)(SimpleCol);
    }
    return Mobile_1.makeQuery(breakPoint)("\n      flex: 0 0 " + getFlex((sm || md || lg || xl)) + "; \n      max-width: " + getMaxWidth((sm || md || lg || xl)) + ";\n      width: " + getWidth((sm || md || lg || xl)) + ";  \n  ");
};
var computeOffset = function (sm, md, lg, xl, offset) {
    var breakPoint = getBreakPoint(sm, md, lg, xl);
    if (!breakPoint)
        return "";
    if (!sm && !md && !lg && !xl)
        return "";
    if (!offset)
        return "";
    return Mobile_1.makeQuery(breakPoint)("margin-left: " + getDimension(offset) + "%");
};
var getDefaultColCSS = function (col) { return styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  flex: 0 0 ", "%;\n  max-width: ", "%;\n"], ["\n  flex: 0 0 ", "%;\n  max-width: ", "%;\n"])), getDimension(col), getDimension(col)); };
var ColRoot = styled_components_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: relative;\n  padding: 0 ", "px;\n  width: 100%;\n"], ["\n  position: relative;\n  padding: 0 ", "px;\n  width: 100%;\n"])), Theme_1.GUTTER);
var SimpleCol = styled_components_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  flex-basis: 0;\n  flex-grow: 1;\n  min-width: 0;\n  max-width: 100%;\n"], ["\n  flex-basis: 0;\n  flex-grow: 1;\n  min-width: 0;\n  max-width: 100%;\n"])));
exports.Col = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  ", ";\n  ", ";\n  ", ";\n  ", "\n  ", ";\n"], ["\n  ", ";\n  ", ";\n  ",
    ";\n  ",
    "\n  ", ";\n"])), function (_a) {
    var sm = _a.sm, md = _a.md, lg = _a.lg, xl = _a.xl;
    return getMediaQuery(sm, md, lg, xl) || SimpleCol;
}, function (_a) {
    var sm = _a.sm, md = _a.md, lg = _a.lg, xl = _a.xl, offset = _a.offset;
    return computeOffset(sm, md, lg, xl, offset);
}, function (_a) {
    var col = _a.col;
    return col
        ? Number.isInteger(col)
            ? getDefaultColCSS(col)
            : SimpleCol
        : "";
}, function (_a) {
    var order = _a.order;
    return order &&
        "order: " + order + ";\n  ";
}, ColRoot);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
