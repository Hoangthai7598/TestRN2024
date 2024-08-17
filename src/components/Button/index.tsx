import {useCallback, useRef} from 'react';
import {Animated, TouchableWithoutFeedback} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {IButton} from './models';

const Button = (props: IButton) => {
  const {color, name, size, style} = props;
  const scale = useRef(new Animated.Value(1)).current;

  const animateScale = useCallback(
    (newValue: number) => {
      Animated.spring(scale, {
        toValue: newValue,
        friction: 4,
        useNativeDriver: true,
      }).start();
    },
    [scale],
  );

  const stylesAdd = props?.style ? props.style : {};

  return (
    <TouchableWithoutFeedback
      onPressIn={() => animateScale(0.6)}
      onPressOut={() => {
        animateScale(1);
      }}
      delayPressIn={0}
      delayPressOut={100}>
      <Animated.View
        style={Object.assign(
          {
            height: 60,
            width: 60,
            backgroundColor: 'white',
            elevation: 5,
            borderRadius: 40,
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: color,
            borderWidth: 1.2,
            transform: [{scale}],
          },
          stylesAdd,
        )}>
        <FontAwesome
          name={name}
          color={color}
          size={size}
          onPress={props?.onPress}
        />
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default Button;
