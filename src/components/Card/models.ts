import {Animated, ImageSourcePropType} from 'react-native';

export interface ICard {
  name: string;
  location: string;
  age: number;
  distance: number;
  image: ImageSourcePropType;
  isFirst: boolean;
  swipe: Animated.ValueXY;
  titleSign: Animated.Value;
}
