"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.YStack = exports.XStack = void 0;
// components/XStack.tsx
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const View_1 = __importDefault(require("./View")); // Adjust the import path as necessary
const XStack = ({ style, ...props }) => {
    const combinedStyles = react_native_1.StyleSheet.flatten([
        { flexDirection: 'row' }, // as const asserts flexDirection is a literal type
        style,
    ]);
    return <View_1.default style={combinedStyles} {...props}/>;
};
exports.XStack = XStack;
const YStack = ({ style, ...props }) => {
    const combinedStyles = react_native_1.StyleSheet.flatten([
        { flexDirection: 'column' }, // as const asserts flexDirection is a literal type
        style,
    ]);
    return <View_1.default style={combinedStyles} {...props}/>;
};
exports.YStack = YStack;
