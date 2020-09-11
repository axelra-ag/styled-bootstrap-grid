"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.P = exports.Display4 = exports.Display3 = exports.Display2 = exports.Display1 = exports.H6 = exports.H5 = exports.H4 = exports.H3 = exports.H2 = exports.H1 = void 0;
var styled_components_1 = __importStar(require("styled-components"));
var Theme_1 = require("../theme/Theme");
/**
 * -------------- Headings --------------
 */
var HeadingRoot = styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-weight: 500;\n  line-height: 1.2;\n  margin: ", "px 0;\n"], ["\n  font-weight: 500;\n  line-height: 1.2;\n  margin: ", "px 0;\n"])), Theme_1.SPACING);
exports.H1 = styled_components_1.default.span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", ";\n  font-size: 40px;\n"], ["\n  ", ";\n  font-size: 40px;\n"])), HeadingRoot);
exports.H2 = styled_components_1.default.span(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", ";\n  font-size: 32px;\n"], ["\n  ", ";\n  font-size: 32px;\n"])), HeadingRoot);
exports.H3 = styled_components_1.default.span(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  ", ";\n  font-size: 28px;\n"], ["\n  ", ";\n  font-size: 28px;\n"])), HeadingRoot);
exports.H4 = styled_components_1.default.span(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  ", ";\n  font-size: 24px;\n"], ["\n  ", ";\n  font-size: 24px;\n"])), HeadingRoot);
exports.H5 = styled_components_1.default.span(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  ", ";\n  font-size: 20px;\n"], ["\n  ", ";\n  font-size: 20px;\n"])), HeadingRoot);
exports.H6 = styled_components_1.default.span(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  ", ";\n  font-size: 16px;\n"], ["\n  ", ";\n  font-size: 16px;\n"])), HeadingRoot);
/**
 * -------------- Displays --------------
 */
var DisplayRoot = styled_components_1.css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  font-weight: 300;\n  line-height: 1.2;\n"], ["\n  font-weight: 300;\n  line-height: 1.2;\n"])));
exports.Display1 = styled_components_1.default.span(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  ", ";\n  font-size: 96px;\n"], ["\n  ", ";\n  font-size: 96px;\n"])), DisplayRoot);
exports.Display2 = styled_components_1.default.span(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  ", ";\n  font-size: 88px;\n"], ["\n  ", ";\n  font-size: 88px;\n"])), DisplayRoot);
exports.Display3 = styled_components_1.default.span(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  ", ";\n  font-size: 72px;\n"], ["\n  ", ";\n  font-size: 72px;\n"])), DisplayRoot);
exports.Display4 = styled_components_1.default.span(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  ", ";\n  font-size: 56px;\n"], ["\n  ", ";\n  font-size: 56px;\n"])), DisplayRoot);
/**
 * -------------- Paragraphs --------------
 */
var ParagraphRoot = styled_components_1.css(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n  font-size: 16px;\n  font-weight: 300;\n  margin-top: 0;\n  margin-bottom: ", "px;\n"], ["\n  font-size: 16px;\n  font-weight: 300;\n  margin-top: 0;\n  margin-bottom: ", "px;\n"])), Theme_1.SPACING * 2);
exports.P = styled_components_1.default.p(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n  ", ";\n"], ["\n  ", ";\n"])), ParagraphRoot);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14;
