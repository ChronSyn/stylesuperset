// components/Text.tsx
import React from 'react';
import { Text, TextStyle, StyleProp } from 'react-native';
import fontSizeStyles from '../styles/font'; // Adjust the import path as necessary

type StyledTextProps = {
  children?: React.ReactNode;
  fontSize?: keyof typeof fontSizeStyles | string; // Updated type
  style?: StyleProp<TextStyle>;
};

const StyledText: React.FC<StyledTextProps> = ({ children, fontSize, style, ...props }) => {

  const getFontSize = () => {
    if (typeof fontSize === 'string' && fontSize.startsWith('$')) {
      const sizeKey = fontSize.replace('$', '') as keyof typeof fontSizeStyles;
      return fontSizeStyles[sizeKey];
    }

    if (typeof fontSize === 'number') {
      return { fontSize };
    }

    return {};
  }

  return <Text style={[style, getFontSize()]} {...props}>{children}</Text>;
};

export default StyledText;
