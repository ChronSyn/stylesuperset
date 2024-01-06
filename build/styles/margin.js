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
const marginStyles = {
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
    marginStyles.t[size] = { marginTop: baseSizes_1.baseSizes[size] };
    marginStyles.b[size] = { marginBottom: baseSizes_1.baseSizes[size] };
    marginStyles.l[size] = { marginLeft: baseSizes_1.baseSizes[size] };
    marginStyles.r[size] = { marginRight: baseSizes_1.baseSizes[size] };
    // Horizontal and Vertical
    marginStyles.x[size] = { marginLeft: baseSizes_1.baseSizes[size], marginRight: baseSizes_1.baseSizes[size] };
    marginStyles.y[size] = { marginTop: baseSizes_1.baseSizes[size], marginBottom: baseSizes_1.baseSizes[size] };
    // All sides
    marginStyles.all[size] = { margin: baseSizes_1.baseSizes[size] };
});
exports.default = marginStyles;
