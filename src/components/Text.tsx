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
    const fontSizeAsString = fontSize?.toString();
    const fontSizeAsNumber = Number(fontSizeAsString);
    const taggedFontSize = (fontSize?.toString() ?? '').replace('$', '');

    if ((fontSize ?? '').toString().startsWith('$')) {
      const out = fontSizeStyles[taggedFontSize as keyof typeof fontSizeStyles];
      console.log(`1 - using ${fontSizeAsString} as ${out}`)
      return out;
    }

    if (!isNaN(fontSizeAsNumber)) {
      console.log(`2 - using ${fontSizeAsNumber} as ${fontSizeAsNumber}`)
      return { fontSize: fontSizeAsNumber };
    }

    return {};
  }

  return <Text style={[style, getFontSize()]} {...props}>{children}</Text>;
};

export default StyledText;
