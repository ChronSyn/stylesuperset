"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.functions = exports.styles = void 0;
const gap_1 = __importDefault(require("./gap"));
const margin_1 = __importDefault(require("./margin"));
const padding_1 = __importDefault(require("./padding"));
const font_1 = __importDefault(require("./font"));
const border_radius_1 = __importDefault(require("./border.radius"));
const border_width_1 = __importDefault(require("./border.width"));
const baseSizes_1 = require("./baseSizes");
exports.styles = {
    gap: gap_1.default,
    margin: margin_1.default,
    padding: padding_1.default,
    font: font_1.default,
    border: {
        radius: border_radius_1.default,
        width: border_width_1.default
    }
};
exports.functions = {
    CreateSizeStyles: baseSizes_1.CreateSizeStyles,
    baseSizes: baseSizes_1.baseSizes
};
