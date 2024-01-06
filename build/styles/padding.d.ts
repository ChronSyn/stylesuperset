import { TBaseSizes } from './baseSizes';
type PaddingDirection = 'pt' | 'pb' | 'pl' | 'pr' | 'px' | 'py' | 'p';
type NestedPaddingStyles = {
    [key in PaddingDirection]: {
        [size in keyof TBaseSizes]: any;
    };
};
declare const paddingStyles: NestedPaddingStyles;
export default paddingStyles;
