import { TBaseSizes } from './baseSizes';
type BorderSide = 'bt' | 'borderTopWidth' | 'bb' | 'borderBottomWidth' | 'bl' | 'borderLeftWidth' | 'br' | 'borderRightWidth' | 'bx' | 'borderXWidth' | 'by' | 'borderYWidth' | 'b' | 'borderWidth';
type NestedborderStyles = {
    [key in BorderSide]: {
        [size in keyof TBaseSizes]: any;
    };
};
declare const borderStyles: NestedborderStyles;
export default borderStyles;
