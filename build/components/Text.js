"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// components/Text.tsx
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const baseSizes_1 = require("../styles/baseSizes");
const StyledText = ({ children, fontSize, style, ...props }) => {
    const getFontSize = () => {
        switch (typeof fontSize) {
            case 'number':
                return { fontSize: fontSize };
            case 'string':
                return { fontSize: baseSizes_1.baseSizes[fontSize] };
        }
    };
    return <react_native_1.Text style={[style, getFontSize()]} {...props}>{children}</react_native_1.Text>;
};
exports.default = StyledText;
