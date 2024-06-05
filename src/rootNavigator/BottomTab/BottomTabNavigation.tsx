import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import BottomStackNavigator from '../BottomStackNavigator/BottomStackNavigator';
import {color} from '../../../assets/color/color';
import {
  iconname,
  routesNav,
  tabbarlabelname,
} from '../../component/String/string';
import Setting from '../../screen/BottomTabScreen/Search/Search';
import Search from '../../screen/BottomTabScreen/Search/Search';
import YourLibarary from '../../screen/BottomTabScreen/YourLibarary/YourLibarary';

const BottomTabNavigationcointener = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          borderColor: color.primary,
          borderRadius: 0.1,
        },
      }}
      initialRouteName={routesNav.bottomhome}>
      <Tab.Screen
        name={routesNav.bottomhome}
        component={BottomStackNavigator}
        options={{
          tabBarLabel: tabbarlabelname.home,
          tabBarIcon: ({color}) => (
            <Entypo name={iconname.home} size={30} color={color} />
          ),
          tabBarActiveBackgroundColor: color.primary,
          tabBarActiveTintColor: color.orange,
          tabBarInactiveBackgroundColor: color.primary,
        }}
      />
      <Tab.Screen
        name={routesNav.search}
        component={Search}
        options={{
          tabBarLabel: tabbarlabelname.search,
          tabBarIcon: ({color}) => (
            <Ionicons name={iconname.search} size={30} color={color} />
          ),
          tabBarActiveBackgroundColor: color.primary,
          tabBarActiveTintColor: color.orange,
          tabBarInactiveBackgroundColor: color.primary,
        }}
      />
      <Tab.Screen
        name={routesNav.yourlib}
        component={YourLibarary}
        options={{
          tabBarLabel: tabbarlabelname.yourlib,
          tabBarIcon: ({color}) => (
            <MaterialIcons name={iconname.yourlib} size={30} color={color} />
          ),
          tabBarActiveBackgroundColor: color.primary,
          tabBarActiveTintColor: color.orange,
          tabBarInactiveBackgroundColor: color.primary,
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomTabNavigationcointener;
