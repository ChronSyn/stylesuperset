"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// components/Text.tsx
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const font_1 = __importDefault(require("../styles/font")); // Adjust the import path as necessary
const StyledText = ({ children, fontSize, style, ...props }) => {
    // Resolve fontSize style
    let fontSizeStyle = {};
    if (fontSize) {
        const sizeKey = typeof fontSize === 'string' && fontSize.startsWith('$')
            ? fontSize.substring(1)
            : fontSize.toString(); // Use toString for numeric values
        fontSizeStyle = font_1.default[sizeKey] || {};
    }
    const combinedStyles = [fontSizeStyle, style];
    return <react_native_1.Text style={combinedStyles} {...props}>{children}</react_native_1.Text>;
};
exports.default = StyledText;
