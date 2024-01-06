"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Stacks_1 = require("./Stacks");
const Text_1 = __importDefault(require("./Text"));
const View_1 = __importDefault(require("./View"));
exports.default = {
    XStack: Stacks_1.XStack,
    YStack: Stacks_1.YStack,
    Text: Text_1.default,
    View: View_1.default
};
