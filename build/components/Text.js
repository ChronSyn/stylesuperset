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
    const getFontSize = () => {
        if (typeof fontSize === 'string' && fontSize.startsWith('$')) {
            const sizeKey = fontSize.replace('$', '');
            return font_1.default[sizeKey];
        }
        if (typeof fontSize === 'number') {
            return { fontSize };
        }
        return {};
    };
    return <react_native_1.Text style={[style, getFontSize()]} {...props}>{children}</react_native_1.Text>;
};
exports.default = StyledText;
