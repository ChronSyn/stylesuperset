// components/Text.tsx
import React from 'react';
import { Text, TextStyle, StyleProp } from 'react-native';
import fontSizeStyles from '../styles/font'; // Adjust the import path as necessary
import { baseSizes } from '../styles/baseSizes';

type StyledTextProps = {
  children?: React.ReactNode;
  fontSize?: keyof typeof fontSizeStyles | string | number; // Updated type
  style?: StyleProp<TextStyle>;
};

const StyledText: React.FC<StyledTextProps> = ({ children, fontSize, style, ...props }) => {

  const getFontSize = () => {
    switch (typeof fontSize) {
      case 'number':
        return { fontSize: fontSize as number };
      case 'string':
        return { fontSize: baseSizes[fontSize as keyof typeof fontSizeStyles]};
    }
  }

  return <Text style={[style, getFontSize()]} {...props}>{children}</Text>;
};

export default StyledText;
