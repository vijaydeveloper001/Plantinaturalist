import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Screens} from '../../Contants/NaivgationName';
import Login from '../../Screens/Login';
const Stack = createNativeStackNavigator();
export default function AuthNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Screens.LOGIN}
        component={Login}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
