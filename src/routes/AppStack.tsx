import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Main} from '../screens/Main';
import {MapViewScreen} from '../screens/MapView';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={Main}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MapView"
        component={MapViewScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
