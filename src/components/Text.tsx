// components/Text.tsx
import React from 'react';
import { Text, TextStyle, StyleProp } from 'react-native';
import fontSizeStyles from '../styles/font'; // Adjust the import path as necessary
import { TBaseSizes } from '../styles/baseSizes';

type StyledTextProps = {
  children?: React.ReactNode;
  fontSize?: keyof TBaseSizes | string; // Shorthand and long-form
  style?: StyleProp<TextStyle>;
};

const StyledText: React.FC<StyledTextProps> = ({ children, fontSize, style, ...props }) => {
  // Resolve fontSize style
  let fontSizeStyle = {};
  if (fontSize) {
    const sizeKey = typeof fontSize === 'string' && fontSize.startsWith('$')
      ? fontSize.substring(1)
      : fontSize.toString(); // Use toString for numeric values

    fontSizeStyle = fontSizeStyles[sizeKey as keyof TBaseSizes] || {};
  }

  const combinedStyles = [fontSizeStyle, style];

  return <Text style={combinedStyles} {...props}>{children}</Text>;
};

export default StyledText;
