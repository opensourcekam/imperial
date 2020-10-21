"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var theme_1 = require("./theme");
var Provider = (function (_super) {
    __extends(Provider, _super);
    function Provider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Provider.prototype.componentWillMount = function () {
        var _a = this.props, colors = _a.colors, shadow = _a.shadow, _b = _a.roundness, roundness = _b === void 0 ? 3 : _b;
        var newTheme = __assign({}, theme_1.theme, { color: __assign({}, theme_1.theme.color, colors), border: __assign({}, theme_1.theme.border, { radius: roundness + "px" }) }, (shadow && {
            box: __assign({}, theme_1.theme.box, { shadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)", hovershadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)" })
        }));
        var base = "\n      * {\n        box-sizing: inherit;\n      }\n      \n      *:before, *:after {\n        box-sizing: inherit;\n      }\n      \n      body {\n        font-size: 16px;\n        line-height: 22px;\n        color: var(--text-color);\n        background: #F5F9FF;\n        margin: 0;\n        padding: 0;\n        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n        box-sizing: border-box;\n      }\n    ";
        var root = "";
        Object.keys(newTheme).forEach(function (k) {
            return (root += "\n        :root {\n          " + Object.keys(newTheme[k])
                .map(function (j) { return "--" + j + "-" + k + ": " + newTheme[k][j] + ";"; })
                .join("\n") + "\n        }\n      ");
        });
        var css = "\n        " + base + "\n        " + root + "\n    ", head = document.head || document.getElementsByTagName("head")[0], style = document.createElement("style");
        style.type = "text/css";
        style.appendChild(document.createTextNode(css));
        head.appendChild(style);
    };
    Provider.prototype.render = function () {
        return null;
    };
    return Provider;
}(React.Component));
exports.Provider = Provider;
//# sourceMappingURL=Provider.js.map