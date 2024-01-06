import { StyleSheet } from 'react-native';
import { baseSizes, TBaseSizes } from './baseSizes';

// Define a type for the font size styles
type FontSizeStyles = {
  [size in keyof TBaseSizes]: { fontSize: number };
};

// Create the font size stylesheet dynamically
const fontSizeStyles: FontSizeStyles = Object.keys(baseSizes).reduce((styles, sizeKey) => {
  const size = sizeKey as keyof TBaseSizes;
  styles[size] = { fontSize: baseSizes[size] };
  return styles;
}, {} as FontSizeStyles);

export default fontSizeStyles;
