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
        var _a;
        const fontSizeAsString = fontSize === null || fontSize === void 0 ? void 0 : fontSize.toString();
        const fontSizeAsNumber = Number(fontSizeAsString);
        const taggedFontSize = ((_a = fontSize === null || fontSize === void 0 ? void 0 : fontSize.toString()) !== null && _a !== void 0 ? _a : '').replace('$', '');
        if ((fontSize !== null && fontSize !== void 0 ? fontSize : '').toString().startsWith('$')) {
            const out = font_1.default[taggedFontSize];
            console.log(`1 - using ${fontSizeAsString} as ${out}`);
            return out;
        }
        if (!isNaN(fontSizeAsNumber)) {
            console.log(`2 - using ${fontSizeAsNumber} as ${fontSizeAsNumber}`);
            return { fontSize: fontSizeAsNumber };
        }
        return {};
    };
    return <react_native_1.Text style={[style, getFontSize()]} {...props}>{children}</react_native_1.Text>;
};
exports.default = StyledText;
