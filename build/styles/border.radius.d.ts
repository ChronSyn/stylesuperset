import { TBaseSizes } from './baseSizes';
type BorderSide = 'btlr' | 'borderTopLeftRadius' | 'bblr' | 'borderBottomLeftRadius' | 'btrr' | 'borderTopRightRadius' | 'bbrr' | 'borderBottomRightRadius' | 'blr' | 'borderLeftRadius' | 'brr' | 'borderRightRadius' | 'btr' | 'borderTopRadius' | 'bbr' | 'borderBottomRadius' | 'br' | 'borderRadius';
type NestedborderStyles = {
    [key in BorderSide]: {
        [size in keyof TBaseSizes]: any;
    };
};
declare const borderStyles: NestedborderStyles;
export default borderStyles;
