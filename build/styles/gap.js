"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseSizes_1 = require("./baseSizes");
// Create the nested gap stylesheet dynamically
const gapStyles = Object.keys(baseSizes_1.baseSizes).reduce((styles, sizeKey) => {
    const size = sizeKey;
    styles[size] = { gap: baseSizes_1.baseSizes[size] };
    return styles;
}, {});
exports.default = gapStyles;
