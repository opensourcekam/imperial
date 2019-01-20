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
var T = styled_components_1.default.input.attrs({
    type: "text"
})(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  --color: var(--primary-color);\n  outline: none;\n  display: block;\n  width: 100%;\n  -webkit-appearance: none;\n  background: #fff;\n  border: 1px solid var(--lightgrey-color);\n  padding: 8px 16px;\n  line-height: 22px;\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--text-color);\n  border-radius: var(--radius-border);\n  transition: border 0.3s ease;\n  &::placeholder {\n    color: var(--darkgrey-color);\n  }\n  &:focus {\n    outline: none;\n    border-color: var(--color);\n  }\n"], ["\n  --color: var(--primary-color);\n  outline: none;\n  display: block;\n  width: 100%;\n  -webkit-appearance: none;\n  background: #fff;\n  border: 1px solid var(--lightgrey-color);\n  padding: 8px 16px;\n  line-height: 22px;\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--text-color);\n  border-radius: var(--radius-border);\n  transition: border 0.3s ease;\n  &::placeholder {\n    color: var(--darkgrey-color);\n  }\n  &:focus {\n    outline: none;\n    border-color: var(--color);\n  }\n"])));
var FormElement = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin-bottom: 20px;\n  label {\n    display: block;\n    margin-bottom: 4px;\n    font-size: 14px;\n    color: var(--headline-color);\n    font-weight: 500;\n  }\n"], ["\n  margin-bottom: 20px;\n  label {\n    display: block;\n    margin-bottom: 4px;\n    font-size: 14px;\n    color: var(--headline-color);\n    font-weight: 500;\n  }\n"])));
var Text = function (_a) {
    var label = _a.label, props = __rest(_a, ["label"]);
    return (React.createElement(FormElement, null,
        React.createElement("label", null, label),
        React.createElement(T, __assign({}, props))));
};
exports.default = Text;
var templateObject_1, templateObject_2;
//# sourceMappingURL=index.js.map