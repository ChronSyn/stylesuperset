import { TBaseSizes } from './baseSizes';
type BorderWidthStyles = {
    [size in keyof TBaseSizes]: {
        borderWidth: number;
    };
};
declare const borderWidthStyles: BorderWidthStyles;
export default borderWidthStyles;
