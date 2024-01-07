import React from 'react';
import StyledView from './View';
type StackProps = React.ComponentProps<typeof StyledView> & {
    children?: React.ReactNode;
};
export declare const XStack: React.FC<StackProps>;
export declare const YStack: React.FC<StackProps>;
export {};
