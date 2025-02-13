import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FormScreen from '../screens/FormScreen';
import ListingScreen from '../screens/ListingScreen';



const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="FormScreen" component={FormScreen} />
      <Stack.Screen name="ListingScreen" component={ListingScreen} />
    </Stack.Navigator>
  );
};
