import React from 'react';
import { TextStyle, StyleProp } from 'react-native';
import fontSizeStyles from '../styles/font';
type StyledTextProps = {
    children?: React.ReactNode;
    fontSize?: keyof typeof fontSizeStyles | string;
    style?: StyleProp<TextStyle>;
};
declare const StyledText: React.FC<StyledTextProps>;
export default StyledText;
