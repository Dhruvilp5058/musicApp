import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as Screens from '../index';
import {routesNav} from '../../component/String/string';

const BottomStackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={routesNav.home}>
      <Stack.Screen name={routesNav.home} component={Screens.HomeScreen2} />
      <Stack.Screen name={routesNav.music} component={Screens.Music} />
      <Stack.Screen
        name={routesNav.musicplay}
        component={Screens.Musicplayer}
      />
    </Stack.Navigator>
  );
};
export default BottomStackNavigator;
