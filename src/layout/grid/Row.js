"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.Row = void 0;
var styled_components_1 = require("styled-components");
var Theme_1 = require("../../theme/Theme");
var Flex_1 = require("./Flex");
exports.Row = styled_components_1["default"](Flex_1.Flex)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  margin-left: -", "px;\n  margin-right: -", "px;\n"], ["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  margin-left: -", "px;\n  margin-right: -", "px;\n"])), Theme_1.GUTTER, Theme_1.GUTTER);
var templateObject_1;
