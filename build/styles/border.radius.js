"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseSizes_1 = require("./baseSizes");
const borderRadiusStyles = Object.keys(baseSizes_1.baseSizes).reduce((styles, sizeKey) => {
    const size = sizeKey;
    styles[size] = { borderRadius: baseSizes_1.baseSizes[size] };
    return styles;
}, {});
exports.default = borderRadiusStyles;
