"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("../../styled-components");
exports.default = styled_components_1.default.label(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  --color: var(--primary-color);\n  --border-hover: var(--primary-color);\n  --border-width: 2px;\n  margin: 0 0 12px 0;\n  display: table;\n  cursor: pointer;\n  &.inline {\n    margin: 0 12px 0 0;\n    display: inline-block;\n  }\n  input {\n    display: none;\n    & + span {\n      color: var(--text-color);\n      height: 22px;\n      font-size: 14px;\n      font-weight: 500;\n      position: relative;\n      display: block;\n      &:before,\n      &:after {\n        content: \"\";\n        display: block;\n        left: 0;\n        top: 0;\n        position: absolute;\n      }\n      &:before {\n        height: 22px;\n        border: var(--border-width) solid var(--lightgrey-color);\n        background: #fff;\n        transition: background 0.3s ease, border-color 0.3s ease;\n      }\n      &:after {\n        transition: transform 0.3s ease, opacity 0.2s ease, background 0.2s ease;\n      }\n    }\n    &:checked + span {\n      &:before {\n        background: var(--color);\n        border-color: var(--color);\n      }\n      &:after {\n        transition: opacity 0.3s ease, background 0.3s ease,\n          transform 0.6s cubic-bezier(0.175, 0.88, 0.32, 1.2);\n      }\n    }\n  }\n  &:hover {\n    input {\n      &:not(:checked) + span {\n        &:before {\n          border-color: var(--heavygrey-color);\n        }\n      }\n    }\n  }\n"], ["\n  --color: var(--primary-color);\n  --border-hover: var(--primary-color);\n  --border-width: 2px;\n  margin: 0 0 12px 0;\n  display: table;\n  cursor: pointer;\n  &.inline {\n    margin: 0 12px 0 0;\n    display: inline-block;\n  }\n  input {\n    display: none;\n    & + span {\n      color: var(--text-color);\n      height: 22px;\n      font-size: 14px;\n      font-weight: 500;\n      position: relative;\n      display: block;\n      &:before,\n      &:after {\n        content: \"\";\n        display: block;\n        left: 0;\n        top: 0;\n        position: absolute;\n      }\n      &:before {\n        height: 22px;\n        border: var(--border-width) solid var(--lightgrey-color);\n        background: #fff;\n        transition: background 0.3s ease, border-color 0.3s ease;\n      }\n      &:after {\n        transition: transform 0.3s ease, opacity 0.2s ease, background 0.2s ease;\n      }\n    }\n    &:checked + span {\n      &:before {\n        background: var(--color);\n        border-color: var(--color);\n      }\n      &:after {\n        transition: opacity 0.3s ease, background 0.3s ease,\n          transform 0.6s cubic-bezier(0.175, 0.88, 0.32, 1.2);\n      }\n    }\n  }\n  &:hover {\n    input {\n      &:not(:checked) + span {\n        &:before {\n          border-color: var(--heavygrey-color);\n        }\n      }\n    }\n  }\n"])));
var templateObject_1;
//# sourceMappingURL=Base.js.map