import { TBaseSizes } from './baseSizes';
type GapStyles = {
    [size in keyof TBaseSizes]: {
        gap: number;
    };
};
declare const gapStyles: GapStyles;
export default gapStyles;
