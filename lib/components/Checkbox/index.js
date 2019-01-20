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
})(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  & + span {\n    padding-left: 22px;\n    &:not(:empty) {\n      padding-left: 30px;\n    }\n    &:before {\n      width: 22px;\n    }\n    &:after {\n      opacity: 0;\n    }\n  }\n  &:checked + span {\n    &:after {\n      opacity: 1;\n    }\n  }\n  & + span {\n    &:before {\n      border-radius: 4px;\n    }\n    &:after {\n      width: 5px;\n      height: 8px;\n      border: 2px solid #fff;\n      border-top: 0;\n      border-left: 0;\n      left: 15px;\n      top: 50px;\n      transform: rotate(20deg);\n    }\n  }\n  &:checked + span {\n    &:after {\n      transform: rotate(34deg) translate(10px, 0px);\n    }\n  }\n"], ["\n  & + span {\n    padding-left: 22px;\n    &:not(:empty) {\n      padding-left: 30px;\n    }\n    &:before {\n      width: 22px;\n    }\n    &:after {\n      opacity: 0;\n    }\n  }\n  &:checked + span {\n    &:after {\n      opacity: 1;\n    }\n  }\n  & + span {\n    &:before {\n      border-radius: 4px;\n    }\n    &:after {\n      width: 5px;\n      height: 8px;\n      border: 2px solid #fff;\n      border-top: 0;\n      border-left: 0;\n      left: 15px;\n      top: 50px;\n      transform: rotate(20deg);\n    }\n  }\n  &:checked + span {\n    &:after {\n      transform: rotate(34deg) translate(10px, 0px);\n    }\n  }\n"])));
var Checkbox = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (React.createElement(Base_1.default, null,
        React.createElement(R, __assign({}, props)),
        React.createElement("span", null, children)));
};
exports.default = Checkbox;
var templateObject_1;
//# sourceMappingURL=index.js.map