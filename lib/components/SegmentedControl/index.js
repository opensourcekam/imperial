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
var Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  --color: var(--primary-color);\n  --border-width: 2px;\n  display: flex;\n  font-size: 14px;\n  font-weight: 600;\n  label {\n    cursor: pointer;\n    input {\n      display: none;\n      & + span {\n        display: block;\n        position: relative;\n        padding: 7px 20px;\n        border: var(--border-width) solid var(--lightgrey-color);\n        transition: background 0.3s ease, border-color 0.3s ease;\n      }\n      &:checked {\n        & + span {\n          z-index: 2;\n          background: var(--color);\n          border-color: var(--color);\n          color: #fff;\n        }\n      }\n    }\n    &:hover {\n      input {\n        & + span {\n          z-index: 1;\n          border-color: var(--color);\n        }\n      }\n    }\n    &:first-child {\n      input {\n        & + span {\n          border-radius: 6px 0 0 6px;\n        }\n      }\n    }\n    &:last-child {\n      input {\n        & + span {\n          border-radius: 0 6px 6px 0;\n        }\n      }\n    }\n    &:not(:first-child) {\n      margin-left: calc(var(--border-width) * -1);\n    }\n  }\n"], ["\n  --color: var(--primary-color);\n  --border-width: 2px;\n  display: flex;\n  font-size: 14px;\n  font-weight: 600;\n  label {\n    cursor: pointer;\n    input {\n      display: none;\n      & + span {\n        display: block;\n        position: relative;\n        padding: 7px 20px;\n        border: var(--border-width) solid var(--lightgrey-color);\n        transition: background 0.3s ease, border-color 0.3s ease;\n      }\n      &:checked {\n        & + span {\n          z-index: 2;\n          background: var(--color);\n          border-color: var(--color);\n          color: #fff;\n        }\n      }\n    }\n    &:hover {\n      input {\n        & + span {\n          z-index: 1;\n          border-color: var(--color);\n        }\n      }\n    }\n    &:first-child {\n      input {\n        & + span {\n          border-radius: 6px 0 0 6px;\n        }\n      }\n    }\n    &:last-child {\n      input {\n        & + span {\n          border-radius: 0 6px 6px 0;\n        }\n      }\n    }\n    &:not(:first-child) {\n      margin-left: calc(var(--border-width) * -1);\n    }\n  }\n"])));
var SegmentedControl = function (_a) {
    var name = _a.name, values = _a.values, children = _a.children, props = __rest(_a, ["name", "values", "children"]);
    return (React.createElement(Wrapper, null, (values).map(function (value) { return (React.createElement("label", null,
        React.createElement("input", __assign({ type: "radio" }, props, { name: name })),
        React.createElement("span", null, value))); })));
};
SegmentedControl.defaultProps = {
    name: "SegmentedControl",
    values: [],
};
exports.default = SegmentedControl;
var templateObject_1;
//# sourceMappingURL=index.js.map