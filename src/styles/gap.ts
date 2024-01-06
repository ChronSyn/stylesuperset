import { StyleSheet } from 'react-native';
import { baseSizes, TBaseSizes } from './baseSizes';

// Define a type for the gap styles
type GapStyles = {
  [size in keyof TBaseSizes]: { gap: number };
};

// Create the nested gap stylesheet dynamically
const gapStyles = Object.keys(baseSizes).reduce((styles, sizeKey) => {
  const size = sizeKey as keyof TBaseSizes;
  styles[size] = { gap: baseSizes[size] };
  return styles;
}, {} as GapStyles);

export default gapStyles;
