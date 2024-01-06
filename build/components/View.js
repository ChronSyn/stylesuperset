"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// components/View.tsx
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const padding_1 = __importDefault(require("../styles/padding"));
const margin_1 = __importDefault(require("../styles/margin"));
const border_width_1 = __importDefault(require("../styles/border.width"));
const border_radius_1 = __importDefault(require("../styles/border.radius"));
const gap_1 = __importDefault(require("../styles/gap"));
const resolveStyle = (stylesObj, propValue, propType) => {
    const sizeKey = (propValue !== null && propValue !== void 0 ? propValue : '').toString().startsWith('$') ? (propValue !== null && propValue !== void 0 ? propValue : '').toString().substring(1) : propValue;
    const resolvedStyle = stylesObj[sizeKey] || {};
    if (propType === 'px' || propType === 'mx') {
        return { paddingLeft: resolvedStyle, paddingRight: resolvedStyle };
    }
    else if (propType === 'py' || propType === 'my') {
        return { paddingTop: resolvedStyle, paddingBottom: resolvedStyle };
    }
    else {
        return resolvedStyle;
    }
};
const StyledView = ({ children, style, ...props }) => {
    const resolvedStyles = Object.keys(props).map((propName) => {
        const propValue = props[propName];
        if (typeof propValue === 'string') {
            switch (propName) {
                case 'pt':
                case 'paddingTop':
                    return resolveStyle(padding_1.default, propValue, 'pt');
                case 'pb':
                case 'paddingBottom':
                    return resolveStyle(padding_1.default, propValue, 'pb');
                case 'pl':
                case 'paddingLeft':
                    return resolveStyle(padding_1.default, propValue, 'pl');
                case 'pr':
                case 'paddingRight':
                    return resolveStyle(padding_1.default, propValue, 'pr');
                case 'px':
                    return resolveStyle(padding_1.default, propValue, 'px');
                case 'py':
                    return resolveStyle(padding_1.default, propValue, 'py');
                case 'mt':
                case 'marginTop':
                    return resolveStyle(margin_1.default, propValue, 'mt');
                case 'mb':
                case 'marginBottom':
                    return resolveStyle(margin_1.default, propValue, 'mb');
                case 'ml':
                case 'marginLeft':
                    return resolveStyle(margin_1.default, propValue, 'ml');
                case 'mr':
                case 'marginRight':
                    return resolveStyle(margin_1.default, propValue, 'mr');
                case 'mx':
                    return resolveStyle(margin_1.default, propValue, 'mx');
                case 'my':
                    return resolveStyle(margin_1.default, propValue, 'my');
                case 'borderWidth':
                    return resolveStyle(border_width_1.default, propValue, '');
                case 'borderRadius':
                    return resolveStyle(border_radius_1.default, propValue, '');
                case 'gap':
                    return resolveStyle(gap_1.default, propValue, '');
                default:
                    return {};
            }
        }
        return {};
    });
    const combinedStyles = [style, ...resolvedStyles].reduce((acc, current) => ({ ...acc, ...current }), {});
    return <react_native_1.View style={combinedStyles} {...props}>{children}</react_native_1.View>;
};
exports.default = StyledView;
