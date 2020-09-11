"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Spacer = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var Theme_1 = require("../../theme/Theme");
var getSpacing = function (x1, x2, x3, x4, x5, x6, x7, x8, x9, x10) {
    if (x1)
        return Theme_1.SPACING;
    if (x2)
        return Theme_1.SPACING * 2;
    if (x3)
        return Theme_1.SPACING * 3;
    if (x4)
        return Theme_1.SPACING * 4;
    if (x5)
        return Theme_1.SPACING * 5;
    if (x6)
        return Theme_1.SPACING * 6;
    if (x7)
        return Theme_1.SPACING * 7;
    if (x8)
        return Theme_1.SPACING * 8;
    if (x9)
        return Theme_1.SPACING * 9;
    if (x10)
        return Theme_1.SPACING * 10;
    return Theme_1.SPACING;
};
var InnerSpacer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  min-width: ", "px;\n  min-height: ", "px;\n  display: flex;\n  position: relative;\n"], ["\n  min-width: ",
    "px;\n  min-height: ",
    "px;\n  display: flex;\n  position: relative;\n"])), function (props) {
    return getSpacing(props.x1, props.x2, props.x3, props.x4, props.x5, props.x6, props.x7, props.x8, props.x9, props.x10);
}, function (props) {
    return getSpacing(props.x1, props.x2, props.x3, props.x4, props.x5, props.x6, props.x7, props.x8, props.x9, props.x10);
});
exports.Spacer = function (_a) {
    var x1 = _a.x1, x2 = _a.x2, x3 = _a.x3, x4 = _a.x4, x5 = _a.x5, x6 = _a.x6, x7 = _a.x7, x8 = _a.x8, x9 = _a.x9, x10 = _a.x10, props = __rest(_a, ["x1", "x2", "x3", "x4", "x5", "x6", "x7", "x8", "x9", "x10"]);
    // Avoiding styled components warning
    // Writing to DOM
    return (<InnerSpacer x1={x1 ? "true" : undefined} x2={x2 ? "true" : undefined} x3={x3 ? "true" : undefined} x4={x4 ? "true" : undefined} x5={x5 ? "true" : undefined} x6={x6 ? "true" : undefined} x7={x7 ? "true" : undefined} x8={x8 ? "true" : undefined} x9={x9 ? "true" : undefined} x10={x10 ? "true" : undefined} {...props}/>);
};
var templateObject_1;
