"use strict";
// import { functions, styles } from './styles/index';
// import * as components from './components/index';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.functions = exports.styles = exports.XStack = exports.YStack = exports.Text = exports.View = void 0;
var View_1 = require("./components/View");
Object.defineProperty(exports, "View", { enumerable: true, get: function () { return __importDefault(View_1).default; } });
var Text_1 = require("./components/Text");
Object.defineProperty(exports, "Text", { enumerable: true, get: function () { return __importDefault(Text_1).default; } });
var Stacks_1 = require("./components/Stacks");
Object.defineProperty(exports, "YStack", { enumerable: true, get: function () { return Stacks_1.YStack; } });
Object.defineProperty(exports, "XStack", { enumerable: true, get: function () { return Stacks_1.XStack; } });
var index_1 = require("./styles/index");
Object.defineProperty(exports, "styles", { enumerable: true, get: function () { return index_1.styles; } });
Object.defineProperty(exports, "functions", { enumerable: true, get: function () { return index_1.functions; } });
// export default {
//   styles,
//   // components,
//   View: components.default.View,
//   Text: components.default.Text,
//   XStack: components.default.XStack,
//   YStack: components.default.YStack,
//   functions: {
//     createSizeStyles: functions.CreateSizeStyles,
//   },
// };
