import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from 'routes/MainStack';

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};

export default AppNavigator;