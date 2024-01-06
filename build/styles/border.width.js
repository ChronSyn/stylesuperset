"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseSizes_1 = require("./baseSizes");
// Initialize each direction with default values
const initializeDirection = () => {
    const initialObject = {};
    Object.keys(baseSizes_1.baseSizes).forEach(sizeKey => {
        initialObject[sizeKey] = {};
    });
    return initialObject;
};
// Create the nested stylesheet dynamically
const borderStyles = {
    bt: initializeDirection(),
    borderTopWidth: initializeDirection(),
    bb: initializeDirection(),
    borderBottomWidth: initializeDirection(),
    bl: initializeDirection(),
    borderLeftWidth: initializeDirection(),
    br: initializeDirection(),
    borderRightWidth: initializeDirection(),
    bx: initializeDirection(),
    borderXWidth: initializeDirection(),
    by: initializeDirection(),
    borderYWidth: initializeDirection(),
    b: initializeDirection(),
    borderWidth: initializeDirection(),
};
// Populate each direction with specific styles
Object.keys(baseSizes_1.baseSizes).forEach(sizeKey => {
    const size = sizeKey;
    // Top, Bottom, Left, Right
    borderStyles.bt[size] = { borderTopWidth: baseSizes_1.baseSizes[size] };
    borderStyles.borderTopWidth[size] = { borderTopWidth: baseSizes_1.baseSizes[size] };
    borderStyles.bb[size] = { borderBottomWidth: baseSizes_1.baseSizes[size] };
    borderStyles.borderBottomWidth[size] = { borderBottomWidth: baseSizes_1.baseSizes[size] };
    borderStyles.bl[size] = { borderLeftWidth: baseSizes_1.baseSizes[size] };
    borderStyles.borderLeftWidth[size] = { borderLeftWidth: baseSizes_1.baseSizes[size] };
    borderStyles.br[size] = { borderRightWidth: baseSizes_1.baseSizes[size] };
    borderStyles.borderRightWidth[size] = { borderRightWidth: baseSizes_1.baseSizes[size] };
    // Horizontal and Vertical
    borderStyles.bx[size] = { borderLeftWidth: baseSizes_1.baseSizes[size], borderRightWidth: baseSizes_1.baseSizes[size] };
    borderStyles.borderXWidth[size] = { borderLeftWidth: baseSizes_1.baseSizes[size], borderRightWidth: baseSizes_1.baseSizes[size] };
    borderStyles.by[size] = { borderTopWidth: baseSizes_1.baseSizes[size], borderBottomWidth: baseSizes_1.baseSizes[size] };
    borderStyles.borderYWidth[size] = { borderTopWidth: baseSizes_1.baseSizes[size], borderBottomWidth: baseSizes_1.baseSizes[size] };
    // All sides
    borderStyles.b[size] = { borderWidth: baseSizes_1.baseSizes[size] };
    borderStyles.borderWidth[size] = { borderWidth: baseSizes_1.baseSizes[size] };
});
exports.default = borderStyles;
