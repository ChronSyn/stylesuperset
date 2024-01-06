import { TBaseSizes } from './baseSizes';
type BorderRadiusStyles = {
    [size in keyof TBaseSizes]: {
        borderRadius: number;
    };
};
declare const borderRadiusStyles: BorderRadiusStyles;
export default borderRadiusStyles;
