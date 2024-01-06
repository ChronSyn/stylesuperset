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
    btlr: initializeDirection(),
    borderTopLeftRadius: initializeDirection(),
    bblr: initializeDirection(),
    borderBottomLeftRadius: initializeDirection(),
    btrr: initializeDirection(),
    borderTopRightRadius: initializeDirection(),
    bbrr: initializeDirection(),
    borderBottomRightRadius: initializeDirection(),
    blr: initializeDirection(),
    borderLeftRadius: initializeDirection(),
    brr: initializeDirection(),
    borderRightRadius: initializeDirection(),
    btr: initializeDirection(),
    borderTopRadius: initializeDirection(),
    bbr: initializeDirection(),
    borderBottomRadius: initializeDirection(),
    br: initializeDirection(),
    borderRadius: initializeDirection(),
};
// Populate each direction with specific styles
Object.keys(baseSizes_1.baseSizes).forEach(sizeKey => {
    const size = sizeKey;
    // Top, Bottom, Left, Right
    borderStyles.btlr[size] = { borderTopLeftRadius: baseSizes_1.baseSizes[size] };
    borderStyles.borderTopLeftRadius[size] = { borderTopLeftRadius: baseSizes_1.baseSizes[size] };
    borderStyles.bblr[size] = { borderBottomLeftRadius: baseSizes_1.baseSizes[size] };
    borderStyles.borderBottomLeftRadius[size] = { borderBottomLeftRadius: baseSizes_1.baseSizes[size] };
    borderStyles.btrr[size] = { borderTopRightRadius: baseSizes_1.baseSizes[size] };
    borderStyles.borderTopRightRadius[size] = { borderTopRightRadius: baseSizes_1.baseSizes[size] };
    borderStyles.bbrr[size] = { borderBottomRightRadius: baseSizes_1.baseSizes[size] };
    borderStyles.borderBottomRightRadius[size] = { borderBottomRightRadius: baseSizes_1.baseSizes[size] };
    // Horizontal and Vertical
    borderStyles.blr[size] = { borderTopLeftRadius: baseSizes_1.baseSizes[size], borderBottomLeftRadius: baseSizes_1.baseSizes[size] };
    borderStyles.borderLeftRadius[size] = { borderTopLeftRadius: baseSizes_1.baseSizes[size], borderBottomLeftRadius: baseSizes_1.baseSizes[size] };
    borderStyles.brr[size] = { borderTopRightRadius: baseSizes_1.baseSizes[size], borderBottomRightRadius: baseSizes_1.baseSizes[size] };
    borderStyles.borderRightRadius[size] = { borderTopRightRadius: baseSizes_1.baseSizes[size], borderBottomRightRadius: baseSizes_1.baseSizes[size] };
    borderStyles.btr[size] = { borderTopLeftRadius: baseSizes_1.baseSizes[size], borderTopRightRadius: baseSizes_1.baseSizes[size] };
    borderStyles.borderTopRadius[size] = { borderTopLeftRadius: baseSizes_1.baseSizes[size], borderTopRightRadius: baseSizes_1.baseSizes[size] };
    borderStyles.bbr[size] = { borderBottomLeftRadius: baseSizes_1.baseSizes[size], borderBottomRightRadius: baseSizes_1.baseSizes[size] };
    borderStyles.borderBottomRadius[size] = { borderBottomLeftRadius: baseSizes_1.baseSizes[size], borderBottomRightRadius: baseSizes_1.baseSizes[size] };
    // All sides
    borderStyles.br[size] = { borderWidth: baseSizes_1.baseSizes[size] };
    borderStyles.borderRadius[size] = { borderRadius: baseSizes_1.baseSizes[size] };
});
exports.default = borderStyles;
