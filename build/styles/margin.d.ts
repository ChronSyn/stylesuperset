import { TBaseSizes } from './baseSizes';
type MarginDirection = 't' | 'b' | 'l' | 'r' | 'x' | 'y' | 'all';
type NestedMarginStyles = {
    [key in MarginDirection]: {
        [size in keyof TBaseSizes]: any;
    };
};
declare const marginStyles: NestedMarginStyles;
export default marginStyles;
