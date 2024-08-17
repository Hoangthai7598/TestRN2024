import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Animated, Dimensions, StatusBar, View} from 'react-native';
import {users as usersArr} from 'utils/data';
import Card from 'components/Card';
import Footer from 'components/Footer';
import {PanResponder} from 'react-native';

const {height} = Dimensions.get('screen');

const HomeScreen = () => {

  const [users, setUsers] = useState(usersArr);

  const swipe = useRef(new Animated.ValueXY()).current;
  const titleSign = useRef(new Animated.Value(1)).current;

  const panRes = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (_, {dx, dy, y0}) => {
      swipe.setValue({x: dx, y: dy});
      titleSign.setValue(y0 > (height * 0.9) / 2 ? 1 : -1);
    },
    onPanResponderRelease: (_, {dx, dy}) => {
      const direction = Math.sign(dx);
      const isActionActive = Math.abs(dx) > 100;

      if (isActionActive) {
        Animated.timing(swipe, {
          duration: 100,
          toValue: {
            x: direction * 500,
            y: dy,
          },
          useNativeDriver: true,
        }).start(removeTopCard);
      } else {
        Animated.spring(swipe, {
          toValue: {
            x: 0,
            y: 0,
          },
          useNativeDriver: true,
          friction: 5,
        }).start();
      }
    },
  });

  const removeTopCard = useCallback(() => {
    setUsers(prevState => prevState.slice(1));
    swipe.setValue({x: 0, y: 0});
  }, [swipe]);

  const handleChoice = useCallback(
    (direction: number) => {
      Animated.timing(swipe.x, {
        toValue: direction * 500,
        duration: 2000,
        useNativeDriver: true,
      }).start(removeTopCard);
    },
    [swipe.x, removeTopCard],
  );

  useEffect(() => {
    if (!users.length) {
      setUsers(usersArr);
    }
  }, [users.length]);

  return (
    <View style={{flex: 1, alignItems: 'center', backgroundColor: 'white'}}>
      <StatusBar hidden={true} />
      {users
        .map(({name, age, distance, id, image, location}, index) => {
          const isFirst = index == 0;
          const dragHandlers = isFirst ? panRes.panHandlers : {};
          return (
            <Card
              key={id}
              name={name}
              age={age}
              distance={distance}
              image={image}
              location={location}
              isFirst={isFirst}
              swipe={swipe}
              titleSign={titleSign}
              {...dragHandlers}
            />
          );
        })
        .reverse()}
      <Footer handleChoice={handleChoice} />
    </View>
  );
};

export default HomeScreen;
