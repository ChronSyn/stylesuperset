import { StyleSheet } from 'react-native';
import { baseSizes, TBaseSizes } from './baseSizes';

type BorderWidthStyles = {
  [size in keyof TBaseSizes]: { borderWidth: number };
};

const borderWidthStyles: BorderWidthStyles = Object.keys(baseSizes).reduce((styles, sizeKey) => {
  const size = sizeKey as keyof TBaseSizes;
  styles[size] = { borderWidth: baseSizes[size] };
  return styles;
}, {} as BorderWidthStyles);

export default borderWidthStyles;
