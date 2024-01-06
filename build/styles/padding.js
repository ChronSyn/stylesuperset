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
    t: initializeDirection(),
    b: initializeDirection(),
    l: initializeDirection(),
    r: initializeDirection(),
    x: initializeDirection(),
    y: initializeDirection(),
    all: initializeDirection(),
};
// Populate each direction with specific styles
Object.keys(baseSizes_1.baseSizes).forEach(sizeKey => {
    const size = sizeKey;
    // Top, Bottom, Left, Right
    paddingStyles.t[size] = { paddingTop: baseSizes_1.baseSizes[size] };
    paddingStyles.b[size] = { paddingBottom: baseSizes_1.baseSizes[size] };
    paddingStyles.l[size] = { paddingLeft: baseSizes_1.baseSizes[size] };
    paddingStyles.r[size] = { paddingRight: baseSizes_1.baseSizes[size] };
    // Horizontal and Vertical
    paddingStyles.x[size] = { paddingLeft: baseSizes_1.baseSizes[size], paddingRight: baseSizes_1.baseSizes[size] };
    paddingStyles.y[size] = { paddingTop: baseSizes_1.baseSizes[size], paddingBottom: baseSizes_1.baseSizes[size] };
    // All sides
    paddingStyles.all[size] = { padding: baseSizes_1.baseSizes[size] };
});
exports.default = paddingStyles;
