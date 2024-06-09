import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Screens} from '../../Contants/NaivgationName';
import Login from '../../Screens/Login/Login';
import Otp from '../../Screens/Otp/Otp';
const Stack = createNativeStackNavigator();
export default function AuthNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Screens.LOGIN}
        component={Login}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name={'Otp'}
        component={Otp}
        options={{headerShown:false}}
      />
    </Stack.Navigator>
  );
}
