import { StyleSheet } from 'react-native';
import { baseSizes, TBaseSizes } from './baseSizes';

type BorderRadiusStyles = {
  [size in keyof TBaseSizes]: { borderRadius: number };
};

const borderRadiusStyles: BorderRadiusStyles = Object.keys(baseSizes).reduce((styles, sizeKey) => {
  const size = sizeKey as keyof TBaseSizes;
  styles[size] = { borderRadius: baseSizes[size] };
  return styles;
}, {} as BorderRadiusStyles);

export default borderRadiusStyles;
