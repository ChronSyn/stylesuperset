import { TBaseSizes } from './baseSizes';
type PaddingDirection = 't' | 'b' | 'l' | 'r' | 'x' | 'y' | 'all';
type NestedPaddingStyles = {
    [key in PaddingDirection]: {
        [size in keyof TBaseSizes]: any;
    };
};
declare const paddingStyles: NestedPaddingStyles;
export default paddingStyles;
