export interface ExplicitSizes {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
}
declare const sizeKeys: string[];
type NumericSizes = typeof sizeKeys[number];
export type TBaseSizes = ExplicitSizes & Record<NumericSizes, number>;
export declare const baseSizes: TBaseSizes;
export interface ICreateSizeStylesArgs {
    baseSize: number;
    minSize: number;
    maxSize: number;
}
export declare const CreateSizeStyles: ({ baseSize, minSize, maxSize }: ICreateSizeStylesArgs) => TBaseSizes;
export {};
