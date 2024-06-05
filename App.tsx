import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  PaperProvider,
  adaptNavigationTheme
} from 'react-native-paper';
import RootNavigation from './src/rootNavigator/RootNavigator/RootNavigation';
const {LightTheme} = adaptNavigationTheme({reactNavigationLight: DefaultTheme});
const App = () => {
  return (
    <PaperProvider theme={LightTheme}>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
