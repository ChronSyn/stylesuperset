"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSizeStyles = exports.baseSizes = void 0;
const GLOBAL_BASE_SIZE = 0.25;
const GLOBAL_MIN_SIZE = -20;
const GLOBAL_MAX_SIZE = 20;
// Function to generate keys
function generateSizeKeys(min, max, step) {
    const keys = [];
    for (let size = min; size <= max; size += step) {
        keys.push(size);
    }
    return keys;
}
// Generate all size keys
const sizeKeys = generateSizeKeys(GLOBAL_MIN_SIZE, GLOBAL_MAX_SIZE, GLOBAL_BASE_SIZE);
const internal__baseSizes = sizeKeys.reduce((acc, size) => {
    acc[size] = size;
    return acc;
}, {});
exports.baseSizes = {
    ...internal__baseSizes,
    xs: internal__baseSizes[1],
    sm: internal__baseSizes[5],
    md: internal__baseSizes[10],
    lg: internal__baseSizes[15],
    xl: internal__baseSizes[sizeKeys.length - 1]
};
const CreateSizeStyles = ({ baseSize, minSize, maxSize }) => {
    const sizeKeys = generateSizeKeys(minSize, maxSize, baseSize);
    const internal__baseSizes = sizeKeys.reduce((acc, size) => {
        acc[size] = size;
        return acc;
    }, {});
    const xsSize = internal__baseSizes[1];
    const xlSizeKey = sizeKeys[sizeKeys.length - 1];
    const xlSize = internal__baseSizes[xlSizeKey];
    // Calculate middle, sm, and lg sizes
    const middleIndex = Math.floor(parseFloat((sizeKeys.length / 2).toFixed(10)));
    const mdSizeKey = sizeKeys[middleIndex];
    const mdSize = internal__baseSizes[mdSizeKey];
    const smIndex = Math.round(sizeKeys.length * 0.25);
    const smSizeKey = sizeKeys[smIndex];
    const smSize = internal__baseSizes[smSizeKey];
    const lgIndex = Math.round((middleIndex + sizeKeys.length - 1) / 2);
    const lgSizeKey = sizeKeys[lgIndex];
    const lgSize = internal__baseSizes[lgSizeKey];
    const baseSizes = {
        ...internal__baseSizes,
        xs: xsSize,
        sm: smSize,
        md: mdSize,
        lg: lgSize,
        xl: xlSize
    };
    return baseSizes;
};
exports.CreateSizeStyles = CreateSizeStyles;
