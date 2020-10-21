"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("../../styled-components");
var Base_1 = require("../Input/Base");
var R = styled_components_1.default.input.attrs({
    type: "checkbox"
})(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  & + span {\n    padding-left: 38px;\n    &:not(:empty) {\n      padding-left: 46px;\n    }\n    &:before {\n      width: 38px;\n      border-radius: 11px;\n    }\n    &:after {\n      left: 4px;\n      top: 4px;\n      border-radius: 50%;\n      width: 14px;\n      height: 14px;\n      background: var(--lightgrey-color);\n    }\n  }\n  &:not(:checked) + span {\n    &:after {\n      transform: translate(4px, 4px) scale(0.9);\n    }\n  }\n\n  &:checked + span {\n    &:after {\n      background: #fff;\n      transform: translate(21px, 4px) scale(0.9);\n    }\n  }\n\n  &:hover {\n    &:not(:checked) + span {\n      &:after {\n        background: var(--heavygrey-color);\n      }\n    }\n  }\n"], ["\n  & + span {\n    padding-left: 38px;\n    &:not(:empty) {\n      padding-left: 46px;\n    }\n    &:before {\n      width: 38px;\n      border-radius: 11px;\n    }\n    &:after {\n      left: 4px;\n      top: 4px;\n      border-radius: 50%;\n      width: 14px;\n      height: 14px;\n      background: var(--lightgrey-color);\n    }\n  }\n  &:not(:checked) + span {\n    &:after {\n      transform: translate(4px, 4px) scale(0.9);\n    }\n  }\n\n  &:checked + span {\n    &:after {\n      background: #fff;\n      transform: translate(21px, 4px) scale(0.9);\n    }\n  }\n\n  &:hover {\n    &:not(:checked) + span {\n      &:after {\n        background: var(--heavygrey-color);\n      }\n    }\n  }\n"])));
var Switch = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (React.createElement(Base_1.default, null,
        React.createElement(R, __assign({}, props)),
        React.createElement("span", null, children)));
};
exports.default = Switch;
var templateObject_1;
//# sourceMappingURL=index.js.map