import { baseSizes, TBaseSizes } from './baseSizes';

// Define a type for the nested padding styles
type BorderSide = 
| 'bt'
| 'borderTopWidth'
| 'bb'
| 'borderBottomWidth'
| 'bl'
| 'borderLeftWidth'
| 'br'
| 'borderRightWidth'
| 'bx'
| 'borderXWidth'
| 'by'
| 'borderYWidth'
| 'b'
| 'borderWidth';

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
  bt: initializeDirection(),
  borderTopWidth: initializeDirection(),
  bb: initializeDirection(),
  borderBottomWidth: initializeDirection(),
  bl: initializeDirection(),
  borderLeftWidth: initializeDirection(),
  br: initializeDirection(),
  borderRightWidth: initializeDirection(),
  bx: initializeDirection(),
  borderXWidth: initializeDirection(),
  by: initializeDirection(),
  borderYWidth: initializeDirection(),
  b: initializeDirection(),
  borderWidth: initializeDirection(),
};

// Populate each direction with specific styles
Object.keys(baseSizes).forEach(sizeKey => {
  const size = sizeKey as keyof TBaseSizes;

  // Top, Bottom, Left, Right
  borderStyles.bt[size] = { borderTopWidth: baseSizes[size] };
  borderStyles.borderTopWidth[size] = { borderTopWidth: baseSizes[size] };
  borderStyles.bb[size] = { borderBottomWidth: baseSizes[size] };
  borderStyles.borderBottomWidth[size] = { borderBottomWidth: baseSizes[size] };
  borderStyles.bl[size] = { borderLeftWidth: baseSizes[size] };
  borderStyles.borderLeftWidth[size] = { borderLeftWidth: baseSizes[size] };
  borderStyles.br[size] = { borderRightWidth: baseSizes[size] };
  borderStyles.borderRightWidth[size] = { borderRightWidth: baseSizes[size] };

  // Horizontal and Vertical
  borderStyles.bx[size] = { borderLeftWidth: baseSizes[size], borderRightWidth: baseSizes[size] };
  borderStyles.borderXWidth[size] = { borderLeftWidth: baseSizes[size], borderRightWidth: baseSizes[size] };
  borderStyles.by[size] = { borderTopWidth: baseSizes[size], borderBottomWidth: baseSizes[size] };
  borderStyles.borderYWidth[size] = { borderTopWidth: baseSizes[size], borderBottomWidth: baseSizes[size] };

  // All sides
  borderStyles.b[size] = { borderWidth: baseSizes[size] };
  borderStyles.borderWidth[size] = { borderWidth: baseSizes[size] };
});

export default borderStyles;