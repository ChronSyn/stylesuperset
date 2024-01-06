import React from 'react';
import { TextStyle, StyleProp } from 'react-native';
import { TBaseSizes } from '../styles/baseSizes';
type StyledTextProps = {
    children?: React.ReactNode;
    fontSize?: keyof TBaseSizes | string;
    style?: StyleProp<TextStyle>;
};
declare const StyledText: React.FC<StyledTextProps>;
export default StyledText;
