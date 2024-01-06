import { TBaseSizes } from './baseSizes';
type FontSizeStyles = {
    [size in keyof TBaseSizes]: {
        fontSize: number;
    };
};
declare const fontSizeStyles: FontSizeStyles;
export default fontSizeStyles;
