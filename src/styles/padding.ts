import { StyleSheet } from 'react-native';
import { baseSizes, TBaseSizes } from './baseSizes';

// Define a type for the nested padding styles
type PaddingDirection = 't' | 'b' | 'l' | 'r' | 'x' | 'y' | 'all';
type NestedPaddingStyles = {
  [key in PaddingDirection]: {
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
const paddingStyles: NestedPaddingStyles = {
  t: initializeDirection(),
  b: initializeDirection(),
  l: initializeDirection(),
  r: initializeDirection(),
  x: initializeDirection(),
  y: initializeDirection(),
  all: initializeDirection(),
};

// Populate each direction with specific styles
Object.keys(baseSizes).forEach(sizeKey => {
  const size = sizeKey as keyof TBaseSizes;

  // Top, Bottom, Left, Right
  paddingStyles.t[size] = { paddingTop: baseSizes[size] };
  paddingStyles.b[size] = { paddingBottom: baseSizes[size] };
  paddingStyles.l[size] = { paddingLeft: baseSizes[size] };
  paddingStyles.r[size] = { paddingRight: baseSizes[size] };

  // Horizontal and Vertical
  paddingStyles.x[size] = { paddingLeft: baseSizes[size], paddingRight: baseSizes[size] };
  paddingStyles.y[size] = { paddingTop: baseSizes[size], paddingBottom: baseSizes[size] };

  // All sides
  paddingStyles.all[size] = { padding: baseSizes[size] };
});

export default paddingStyles;