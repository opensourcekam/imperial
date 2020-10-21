"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Icon = function (_a) {
    var color = _a.color, icon = _a.icon, size = _a.size;
    return (React.createElement("svg", { style: {
            display: "inline-block",
            verticalAlign: "middle"
        }, width: size + "rem", height: size + "rem", viewBox: "0 0 1024 1024" },
        React.createElement("path", { style: {
                fill: color
            }, d: icon })));
};
Icon.defaultProps = { size: 1 };
exports.default = Icon;
//# sourceMappingURL=index.js.map