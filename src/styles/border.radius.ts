import { baseSizes, TBaseSizes } from './baseSizes';

// Define a type for the nested padding styles
type BorderSide =
  | 'btlr'
  | 'borderTopLeftRadius'
  | 'bblr'
  | 'borderBottomLeftRadius'
  | 'btrr'
  | 'borderTopRightRadius'
  | 'bbrr'
  | 'borderBottomRightRadius'
  | 'blr'
  | 'borderLeftRadius'
  | 'brr'
  | 'borderRightRadius'
  | 'btr'
  | 'borderTopRadius'
  | 'bbr'
  | 'borderBottomRadius'
  | 'br'
  | 'borderRadius';

type NestedborderStyles = {
  [key in BorderSide]: {
    [size in keyof TBaseSizes]: any;
  };
};

// Initialize each direction with default values
const initializeDirection = () => {
  const initialObject: { [size in keyof TBaseSizes]: any } = {} as any;
  Object.keys(baseSizes).forEach(sizeKey => {
    initialObject[sizeKey as keyof TBaseSizes] = {};
  });
  return initialObject;
};

// Create the nested stylesheet dynamically
const borderStyles: NestedborderStyles = {
  btlr: initializeDirection(),
  borderTopLeftRadius: initializeDirection(),
  bblr: initializeDirection(),
  borderBottomLeftRadius: initializeDirection(),
  btrr: initializeDirection(),
  borderTopRightRadius: initializeDirection(),
  bbrr: initializeDirection(),
  borderBottomRightRadius: initializeDirection(),
  blr: initializeDirection(),
  borderLeftRadius: initializeDirection(),
  brr: initializeDirection(),
  borderRightRadius: initializeDirection(),
  btr: initializeDirection(),
  borderTopRadius: initializeDirection(),
  bbr: initializeDirection(),
  borderBottomRadius: initializeDirection(),
  br: initializeDirection(),
  borderRadius: initializeDirection(),
};

// Populate each direction with specific styles
Object.keys(baseSizes).forEach(sizeKey => {
  const size = sizeKey as keyof TBaseSizes;

  // Top, Bottom, Left, Right
  borderStyles.btlr[size] = { borderTopLeftRadius: baseSizes[size] };
  borderStyles.borderTopLeftRadius[size] = { borderTopLeftRadius: baseSizes[size] };
  borderStyles.bblr[size] = { borderBottomLeftRadius: baseSizes[size] };
  borderStyles.borderBottomLeftRadius[size] = { borderBottomLeftRadius: baseSizes[size] };
  borderStyles.btrr[size] = { borderTopRightRadius: baseSizes[size] };
  borderStyles.borderTopRightRadius[size] = { borderTopRightRadius: baseSizes[size] };
  borderStyles.bbrr[size] = { borderBottomRightRadius: baseSizes[size] };
  borderStyles.borderBottomRightRadius[size] = { borderBottomRightRadius: baseSizes[size] };

  // Horizontal and Vertical
  borderStyles.blr[size] = { borderTopLeftRadius: baseSizes[size], borderBottomLeftRadius: baseSizes[size] };
  borderStyles.borderLeftRadius[size] = { borderTopLeftRadius: baseSizes[size], borderBottomLeftRadius: baseSizes[size] };
  borderStyles.brr[size] = { borderTopRightRadius: baseSizes[size], borderBottomRightRadius: baseSizes[size] };
  borderStyles.borderRightRadius[size] = { borderTopRightRadius: baseSizes[size], borderBottomRightRadius: baseSizes[size] };
  borderStyles.btr[size] = { borderTopLeftRadius: baseSizes[size], borderTopRightRadius: baseSizes[size] };
  borderStyles.borderTopRadius[size] = { borderTopLeftRadius: baseSizes[size], borderTopRightRadius: baseSizes[size] };
  borderStyles.bbr[size] = { borderBottomLeftRadius: baseSizes[size], borderBottomRightRadius: baseSizes[size] };
  borderStyles.borderBottomRadius[size] = { borderBottomLeftRadius: baseSizes[size], borderBottomRightRadius: baseSizes[size] };

  // All sides
  borderStyles.br[size] = { borderWidth: baseSizes[size] };
  borderStyles.borderRadius[size] = { borderRadius: baseSizes[size] };
});

export default borderStyles;