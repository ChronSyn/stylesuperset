import { functions, styles } from './styles/index';
import * as components from './components/index';

export default {
  styles,
  // components,
  View: components.default.View,
  Text: components.default.Text,
  XStack: components.default.XStack,
  YStack: components.default.YStack,
  functions: {
    createSizeStyles: functions.CreateSizeStyles,
  },
};