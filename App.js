import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import ScreenBase from './App/components/screenBase/ScreenBase';
import HomeScreen from './App/components/HomeScreen';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
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
        }}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="People" component={ScreenBase} />
        <Drawer.Screen name="Planets" component={ScreenBase} />
        <Drawer.Screen name="Films" component={ScreenBase} />
        <Drawer.Screen name="Species" component={ScreenBase} />
        <Drawer.Screen name="Vehicles" component={ScreenBase} />
        <Drawer.Screen name="Starships" component={ScreenBase} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
