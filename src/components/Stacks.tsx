// components/Stacks.tsx
import React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import StyledView from './View';

type StackProps = React.ComponentProps<typeof StyledView> & {
  children?: React.ReactNode;
};

export const XStack: React.FC<StackProps> = ({ children, style, ...rest }) => {
  const combinedStyles: ViewStyle = StyleSheet.flatten([
    { flexDirection: 'row' as const },
    style,
  ]);

  //@ts-ignore
  return <StyledView style={[combinedStyles, { flexDirection: 'row' }]} {...rest}>{children}</StyledView>;
};

export const YStack: React.FC<StackProps> = ({ children, style, ...styleProps }) => {
  const combinedStyles: ViewStyle = StyleSheet.flatten([
    { flexDirection: 'column' as const },
    style,
  ]);

  //@ts-ignore
  return <StyledView style={combinedStyles} {...styleProps}>{children as React.ReactNode}</StyledView>;
};
