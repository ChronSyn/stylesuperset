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
const paddingStyles = {
    pt: initializeDirection(),
    pb: initializeDirection(),
    pl: initializeDirection(),
    pr: initializeDirection(),
    px: initializeDirection(),
    py: initializeDirection(),
    p: initializeDirection(),
};
// Populate each direction with specific styles
Object.keys(baseSizes_1.baseSizes).forEach(sizeKey => {
    const size = sizeKey;
    // Top, Bottom, Left, Right
    paddingStyles.pt[size] = { paddingTop: baseSizes_1.baseSizes[size] };
    paddingStyles.pb[size] = { paddingBottom: baseSizes_1.baseSizes[size] };
    paddingStyles.pl[size] = { paddingLeft: baseSizes_1.baseSizes[size] };
    paddingStyles.pr[size] = { paddingRight: baseSizes_1.baseSizes[size] };
    // Horizontal and Vertical
    paddingStyles.px[size] = { paddingLeft: baseSizes_1.baseSizes[size], paddingRight: baseSizes_1.baseSizes[size] };
    paddingStyles.py[size] = { paddingTop: baseSizes_1.baseSizes[size], paddingBottom: baseSizes_1.baseSizes[size] };
    // All sides
    paddingStyles.p[size] = { padding: baseSizes_1.baseSizes[size] };
});
exports.default = paddingStyles;
