// components/View.tsx
import React from 'react';
import { View, ViewStyle, StyleProp } from 'react-native';
import paddingStyles from '../styles/padding';
import marginStyles from '../styles/margin';
import borderWidthStyles from '../styles/border.width';
import borderRadiusStyles from '../styles/border.radius';
import gapStyles from '../styles/gap';
import { TBaseSizes } from '../styles/baseSizes';

type ShorthandStyleProps = {
  [Property in keyof typeof paddingStyles | keyof typeof marginStyles | keyof typeof borderWidthStyles | keyof typeof borderRadiusStyles | keyof typeof gapStyles]?: keyof TBaseSizes | string;
};

type LongFormStyleProps = {
  marginTop?: keyof TBaseSizes | string;
  marginBottom?: keyof TBaseSizes | string;
  marginLeft?: keyof TBaseSizes | string;
  marginRight?: keyof TBaseSizes | string;
  paddingTop?: keyof TBaseSizes | string;
  paddingBottom?: keyof TBaseSizes | string;
  paddingLeft?: keyof TBaseSizes | string;
  paddingRight?: keyof TBaseSizes | string;
  // Add other long-form props as needed
};

type StyledViewProps = ShorthandStyleProps & LongFormStyleProps & {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

const resolveStyle = (stylesObj: any, propValue: keyof TBaseSizes | string, propType: string) => {
  const sizeKey = (propValue ?? '').toString().startsWith('$') ? (propValue ?? '').toString().substring(1) as keyof TBaseSizes : propValue;
  const resolvedStyle = stylesObj[sizeKey] || {};

  // if (propType === 'px' || propType === 'mx') {
  //   return { paddingLeft: resolvedStyle, paddingRight: resolvedStyle };
  // } else if (propType === 'py' || propType === 'my') {
  //   return { paddingTop: resolvedStyle, paddingBottom: resolvedStyle };
  // } else {
  return resolvedStyle;
  // }
};

const StyledView: React.FC<StyledViewProps> = ({ children, style, ...props }) => {
  const resolvedStyles = Object.keys(props).map((propName) => {
    const propValue = props[propName as keyof StyledViewProps] as keyof TBaseSizes | string;
    if (typeof propValue === 'string') {
      switch (propName) {
        case 'pt':
        case 'paddingTop':
          return resolveStyle(paddingStyles, propValue, 'pt');
        case 'pb':
        case 'paddingBottom':
          return resolveStyle(paddingStyles, propValue, 'pb');
        case 'pl':
        case 'paddingLeft':
          return resolveStyle(paddingStyles, propValue, 'pl');
        case 'pr':
        case 'paddingRight':
          return resolveStyle(paddingStyles, propValue, 'pr');
        case 'px':
          return resolveStyle(paddingStyles, propValue, 'px');
        case 'py':
          return resolveStyle(paddingStyles, propValue, 'py');
        case 'mt':
        case 'marginTop':
          return resolveStyle(marginStyles, propValue, 'mt');
        case 'mb':
        case 'marginBottom':
          return resolveStyle(marginStyles, propValue, 'mb');
        case 'ml':
        case 'marginLeft':
          return resolveStyle(marginStyles, propValue, 'ml');
        case 'mr':
        case 'marginRight':
          return resolveStyle(marginStyles, propValue, 'mr');
        case 'mx':
          return resolveStyle(marginStyles, propValue, 'mx');
        case 'my':
          return resolveStyle(marginStyles, propValue, 'my');
        case 'borderWidth':
          return resolveStyle(borderWidthStyles, propValue, '');
        case 'borderRadius':
          return resolveStyle(borderRadiusStyles, propValue, '');
        case 'gap':
          return resolveStyle(gapStyles, propValue, '');
        default:
          return {};
      }
    }
    return {};
  });

  const combinedStyles = [style, ...resolvedStyles].reduce((acc, current) => ({ ...acc, ...current }), {});

  return <View style={combinedStyles} {...props}>{children}</View>;
};

export default StyledView;
