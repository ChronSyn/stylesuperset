"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.YStack = exports.XStack = void 0;
// components/Stacks.tsx
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const View_1 = __importDefault(require("./View"));
const XStack = ({ children, style, ...rest }) => {
    const combinedStyles = react_native_1.StyleSheet.flatten([
        { flexDirection: 'row' },
        style,
    ]);
    //@ts-ignore
    return <View_1.default style={[combinedStyles, { flexDirection: 'row' }]} {...rest}>{children}</View_1.default>;
};
exports.XStack = XStack;
const YStack = ({ children, style, ...styleProps }) => {
    const combinedStyles = react_native_1.StyleSheet.flatten([
        { flexDirection: 'column' },
        style,
    ]);
    //@ts-ignore
    return <View_1.default style={combinedStyles} {...styleProps}>{children}</View_1.default>;
};
exports.YStack = YStack;
