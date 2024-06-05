import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import BottomTabNavigationcointener from '../BottomTab/BottomTabNavigation';
import * as Screens from '../index';
import {routesNav} from '../../component/String/string';

const Stack = createNativeStackNavigator();
const RootNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={routesNav.login}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={routesNav.login} component={Screens.LoginScreen} />
      <Stack.Screen
        name={routesNav.hometab}
        component={BottomTabNavigationcointener}
      />
    </Stack.Navigator>
  );
};

export default RootNavigation;
