/* IMPORTANT: Commented lines are for the use of context */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Provider} from 'react-redux';

import HomeScreen from './App/screens/HomeScreen';
import ScreenBase from './App/screens/BaseScreen';
import StaredScreen from './App/screens/StaredScreen';
import {store} from './App/store/redux/store';
// import StaredContextProvider from './App/store/context/stared-context';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    // <StaredContextProvider>
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home" screenOptions={screenOptions}>
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="People" component={ScreenBase} />
          <Drawer.Screen name="Planets" component={ScreenBase} />
          <Drawer.Screen name="Films" component={ScreenBase} />
          <Drawer.Screen name="Species" component={ScreenBase} />
          <Drawer.Screen name="Vehicles" component={ScreenBase} />
          <Drawer.Screen name="Starships" component={ScreenBase} />
          <Drawer.Screen name="Favourites" component={StaredScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
      {/* </StaredContextProvider>  */}
    </Provider>
  );
};

export default App;

const screenOptions = {
  headerStyle: {backgroundColor: '#000'},
  headerTitleStyle: {
    color: '#ffffff',
  },
  headerTintColor: 'lightblue',
  drawerActiveBackgroundColor: 'lightblue',
  drawerLabelStyle: {
    color: '#ffffff',
    fontFamily: 'Starjedi',
  },
  drawerStyle: {
    backgroundColor: '#000',
    width: '55%',
  },
};
