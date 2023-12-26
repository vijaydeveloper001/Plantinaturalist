import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../../Screens/Home/Home';
import { Screens } from '../../Contants/NaivgationName';
import AddData from '../../Screens/AddData';
import Login from '../../Screens/Login';
import SignupScreen from '../../Screens/Signup';
import { SplashScreen } from '../../Screens/Splash/Splash';
import DetailPlants from '../../Screens/Details';
import { Profile } from '../../Screens/Profile';
const Stack = createNativeStackNavigator();

const optionheaders = {
    headerShown:false
}

export default function AppNavgigation() {
  return (
    <Stack.Navigator initialRouteName = {Screens.SPLASH}>
      <Stack.Screen name={Screens.LOGIN} component={Login} options={optionheaders}/>
        <Stack.Screen name={Screens.HOMESCREENS} component={Home} options={optionheaders}/>
        <Stack.Screen name={Screens.ADDDATA} component={AddData}/>
        <Stack.Screen name={Screens.SIGNUP} component={SignupScreen}  options={optionheaders}/>
        <Stack.Screen name={Screens.SPLASH} component={SplashScreen}  options={optionheaders}/>
        <Stack.Screen name={Screens.DETAILSCREEN} component={DetailPlants}  options={optionheaders}/>
        <Stack.Screen name={Screens.PROFILE} component={Profile}  />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})