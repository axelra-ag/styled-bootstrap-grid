"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.Flex = void 0;
var styled_components_1 = require("styled-components");
exports.Flex = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  flex: ", ";\n  display: ", ";\n  flex-direction: ", ";\n  align-items: ", ";\n  justify-content: ", ";\n"], ["\n  flex: ", ";\n  display: ", ";\n  flex-direction: ", ";\n  align-items: ", ";\n  justify-content: ", ";\n"])), function (props) { return props.flex || 0; }, function (props) { return (props.row || props.column ? "flex" : "block"); }, function (props) { return (props.row ? "row" : "column"); }, function (props) { return props.align || "flex-start"; }, function (props) { return props.justify || "flex-start"; });
var templateObject_1;
