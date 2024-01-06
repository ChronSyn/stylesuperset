import React from 'react';
import { ViewStyle, StyleProp } from 'react-native';
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
};
type StyledViewProps = ShorthandStyleProps & LongFormStyleProps & {
    children?: React.ReactNode;
    style?: StyleProp<ViewStyle>;
};
declare const StyledView: React.FC<StyledViewProps>;
export default StyledView;
