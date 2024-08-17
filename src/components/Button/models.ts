import {
  TextStyle,
  StyleProp,
  ColorValue,
  GestureResponderEvent,
  ViewStyle,
} from 'react-native';

export interface IButton {
  name: string;
  size: number;
  color: ColorValue | undefined;
  style?: StyleProp<ViewStyle>;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
}
