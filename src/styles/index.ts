import gapStyles from "./gap"
import marginStyles from "./margin"
import paddingStyles from "./padding"
import fontSizeStyles from "./font"
import borderRadiusStyles from "./border.radius"
import borderWidthStyles from "./border.width"

import { CreateSizeStyles, baseSizes } from "./baseSizes"

export const styles = {
  gap: gapStyles,
  margin: marginStyles,
  padding: paddingStyles,
  font: fontSizeStyles,
  border: {
    radius: borderRadiusStyles,
    width: borderWidthStyles
  }
}

export const functions = {
  CreateSizeStyles,
  baseSizes
}