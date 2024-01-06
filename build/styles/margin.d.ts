import { TBaseSizes } from './baseSizes';
type MarginDirection = 'mt' | 'mb' | 'ml' | 'mr' | 'mx' | 'my' | 'm';
type NestedMarginStyles = {
    [key in MarginDirection]: {
        [size in keyof TBaseSizes]: any;
    };
};
declare const marginStyles: NestedMarginStyles;
export default marginStyles;
