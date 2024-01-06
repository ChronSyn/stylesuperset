// components/XStack.tsx
import React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import StyledView from './View'; // Adjust the import path as necessary

type StackProps = React.ComponentProps<typeof StyledView>;

export const XStack: React.FC<StackProps> = ({ style, ...props }) => {
  const combinedStyles: ViewStyle = StyleSheet.flatten([
    { flexDirection: 'row' as const }, // as const asserts flexDirection is a literal type
    style,
  ]);

  return <StyledView style={combinedStyles} {...props} />;
};

export const YStack: React.FC<StackProps> = ({ style, ...props }) => {
  const combinedStyles: ViewStyle = StyleSheet.flatten([
    { flexDirection: 'column' as const }, // as const asserts flexDirection is a literal type
    style,
  ]);

  return <StyledView style={combinedStyles} {...props} />;
};
