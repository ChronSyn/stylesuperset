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
    mt: initializeDirection(),
    mb: initializeDirection(),
    ml: initializeDirection(),
    mr: initializeDirection(),
    mx: initializeDirection(),
    my: initializeDirection(),
    m: initializeDirection(),
};
// Populate each direction with specific styles
Object.keys(baseSizes_1.baseSizes).forEach(sizeKey => {
    const size = sizeKey;
    // Top, Bottom, Left, Right
    marginStyles.mt[size] = { marginTop: baseSizes_1.baseSizes[size] };
    marginStyles.mb[size] = { marginBottom: baseSizes_1.baseSizes[size] };
    marginStyles.ml[size] = { marginLeft: baseSizes_1.baseSizes[size] };
    marginStyles.mr[size] = { marginRight: baseSizes_1.baseSizes[size] };
    // Horizontal and Vertical
    marginStyles.mx[size] = { marginLeft: baseSizes_1.baseSizes[size], marginRight: baseSizes_1.baseSizes[size] };
    marginStyles.my[size] = { marginTop: baseSizes_1.baseSizes[size], marginBottom: baseSizes_1.baseSizes[size] };
    // All sides
    marginStyles.m[size] = { margin: baseSizes_1.baseSizes[size] };
});
exports.default = marginStyles;
