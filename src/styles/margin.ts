import { StyleSheet } from 'react-native';
import { baseSizes, TBaseSizes } from './baseSizes';

// Define a type for the nested margin styles
type MarginDirection = 'mt' | 'mb' | 'ml' | 'mr' | 'mx' | 'my' | 'm';
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
  mt: initializeDirection(),
  mb: initializeDirection(),
  ml: initializeDirection(),
  mr: initializeDirection(),
  mx: initializeDirection(),
  my: initializeDirection(),
  m: initializeDirection(),
};

// Populate each direction with specific styles
Object.keys(baseSizes).forEach(sizeKey => {
  const size = sizeKey as keyof TBaseSizes;

  // Top, Bottom, Left, Right
  marginStyles.mt[size] = { marginTop: baseSizes[size] };
  marginStyles.mb[size] = { marginBottom: baseSizes[size] };
  marginStyles.ml[size] = { marginLeft: baseSizes[size] };
  marginStyles.mr[size] = { marginRight: baseSizes[size] };

  // Horizontal and Vertical
  marginStyles.mx[size] = { marginLeft: baseSizes[size], marginRight: baseSizes[size] };
  marginStyles.my[size] = { marginTop: baseSizes[size], marginBottom: baseSizes[size] };

  // All sides
  marginStyles.m[size] = { margin: baseSizes[size] };
});

export default marginStyles;
