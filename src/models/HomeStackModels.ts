import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export type HomeStackParamList = {
  Home: undefined;
  Name: undefined;
  Test: undefined;
};

export type TNameScreenProps = NativeStackScreenProps<
  HomeStackParamList,
  'Name'
>;
export type THomeScreenProps = NativeStackScreenProps<
  HomeStackParamList,
  'Home'
>;

export type TTestScreenProps = NativeStackScreenProps<
  HomeStackParamList,
  'Test'
>;
