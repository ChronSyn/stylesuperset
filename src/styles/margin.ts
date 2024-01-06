import { StyleSheet } from 'react-native';
import { baseSizes, TBaseSizes } from './baseSizes';

// Define a type for the nested margin styles
type MarginDirection = 't' | 'b' | 'l' | 'r' | 'x' | 'y' | 'all';
type NestedMarginStyles = {
  [key in MarginDirection]: {
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
const marginStyles: NestedMarginStyles = {
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
  marginStyles.t[size] = { marginTop: baseSizes[size] };
  marginStyles.b[size] = { marginBottom: baseSizes[size] };
  marginStyles.l[size] = { marginLeft: baseSizes[size] };
  marginStyles.r[size] = { marginRight: baseSizes[size] };

  // Horizontal and Vertical
  marginStyles.x[size] = { marginLeft: baseSizes[size], marginRight: baseSizes[size] };
  marginStyles.y[size] = { marginTop: baseSizes[size], marginBottom: baseSizes[size] };

  // All sides
  marginStyles.all[size] = { margin: baseSizes[size] };
});

export default marginStyles;
