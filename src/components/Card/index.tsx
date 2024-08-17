import {Animated} from 'react-native';
import {View, Text, Image} from 'react-native';
import {ICard} from './models';
import Choice from 'components/Choice';
import {Fragment, useCallback} from 'react';
import styles from './styles';

const Card = (props: ICard) => {
  const {
    age,
    distance,
    image,
    location,
    name,
    isFirst,
    swipe,
    titleSign,
    ...rest
  } = props;

  const rotate = Animated.multiply(swipe.x, titleSign).interpolate({
    inputRange: [-100, 0, 100],
    outputRange: ['8deg', '0deg', '-8deg'],
  });

  const animatedCardStyle = {
    transform: [...swipe.getTranslateTransform(), {rotate}],
  };

  const likeOpacity = swipe.x.interpolate({
    inputRange: [25, 100],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  const nopeOpacity = swipe.x.interpolate({
    inputRange: [-100, -25],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  const renderChoice = useCallback(() => {
    return (
      <Fragment>
        <Animated.View
          style={[
            styles.choiceContainer,
            styles.likeContainer,
            {opacity: likeOpacity},
          ]}>
          <Choice type="like" />
        </Animated.View>
        <Animated.View
          style={[
            styles.choiceContainer,
            styles.nopeContainer,
            {opacity: nopeOpacity},
          ]}>
          <Choice type="nope" />
        </Animated.View>
      </Fragment>
    );
  }, [likeOpacity, nopeOpacity]);

  return (
    <Animated.View
      style={[styles.container, isFirst && animatedCardStyle]}
      {...rest}>
      <Image source={image} style={styles.images} />
      <View style={styles.userContainer}>
        <Text style={styles.name}>
          {name}, {age}
        </Text>
        <Text style={styles.location}>Live in {location}</Text>
        <Text style={styles.distance}>{distance} miles away</Text>
      </View>
      {props?.isFirst && renderChoice()}
    </Animated.View>
  );
};

export default Card;
