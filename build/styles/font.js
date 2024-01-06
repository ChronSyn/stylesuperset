"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseSizes_1 = require("./baseSizes");
// Create the font size stylesheet dynamically
const fontSizeStyles = Object.keys(baseSizes_1.baseSizes).reduce((styles, sizeKey) => {
    const size = sizeKey;
    styles[size] = { fontSize: baseSizes_1.baseSizes[size] };
    return styles;
}, {});
exports.default = fontSizeStyles;
