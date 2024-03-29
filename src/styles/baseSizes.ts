const GLOBAL_BASE_SIZE: number = 0.25;
const GLOBAL_MIN_SIZE: number = -20;
const GLOBAL_MAX_SIZE: number = 20;

// Function to generate keys
function generateSizeKeys(min: number, max: number, step: number): string[] {
  const keys = [];
  for (let size = min; size <= max; size += step) {
    keys.push(`$${size}`); // Prefixing with '$'
  }
  return keys;
}

// Define the ExplicitSizes interface
export interface ExplicitSizes {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

// Generate all size keys
const sizeKeys = generateSizeKeys(GLOBAL_MIN_SIZE, GLOBAL_MAX_SIZE, GLOBAL_BASE_SIZE);

// Define a type for all size keys
type NumericSizes = typeof sizeKeys[number];

// Define the TBaseSizes type
export type TBaseSizes = ExplicitSizes & Record<NumericSizes, number>;

const internal__baseSizes: TBaseSizes = sizeKeys.reduce((acc, sizeKey) => {
  const size = parseFloat(sizeKey.substring(1)); // Removing '$' prefix and converting to number
  acc[sizeKey] = size;
  return acc;
}, {} as TBaseSizes);

export const baseSizes: TBaseSizes = {
  ...internal__baseSizes,
  xs: internal__baseSizes['$1'],
  sm: internal__baseSizes['$5'],
  md: internal__baseSizes['$10'],
  lg: internal__baseSizes['$15'],
  xl: internal__baseSizes[sizeKeys[sizeKeys.length - 1]]
};

export interface ICreateSizeStylesArgs {
  baseSize: number;
  minSize: number;
  maxSize: number;
}

export const CreateSizeStyles = ({ baseSize, minSize, maxSize }: ICreateSizeStylesArgs) => {
  const sizeKeys = generateSizeKeys(minSize, maxSize, baseSize);

  const internal__baseSizes: TBaseSizes = sizeKeys.reduce((acc, sizeKey) => {
    const size = parseFloat(sizeKey.substring(1)); // Removing '$' prefix and converting to number
    acc[sizeKey] = size;
    return acc;
  }, {} as TBaseSizes);

  const xsSize = internal__baseSizes['$1'];

  const xlSizeKey = sizeKeys[sizeKeys.length - 1];
  const xlSize = internal__baseSizes[xlSizeKey];

  // Calculate middle, sm, and lg sizes
  const middleIndex = Math.floor(parseFloat((sizeKeys.length / 2).toFixed(10)));
  const mdSizeKey = sizeKeys[middleIndex];
  const mdSize = internal__baseSizes[mdSizeKey];

  const smIndex = Math.round(sizeKeys.length * 0.25);
  const smSizeKey = sizeKeys[smIndex];
  const smSize = internal__baseSizes[smSizeKey];

  const lgIndex = Math.round((middleIndex + sizeKeys.length - 1) / 2);
  const lgSizeKey = sizeKeys[lgIndex];
  const lgSize = internal__baseSizes[lgSizeKey];

  const baseSizes: TBaseSizes = {
    ...internal__baseSizes,
    xs: xsSize,
    sm: smSize,
    md: mdSize,
    lg: lgSize,
    xl: xlSize
  };

  return baseSizes;
};
