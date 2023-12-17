import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../../Screens/Home/Home';
import { Screens } from '../../Contants/NaivgationName';
import AddData from '../../Screens/AddData';
import Login from '../../Screens/Login';
const Stack = createNativeStackNavigator();

const optionheaders = {
    headerShown:false
}

export default function AppNavgigation() {
  return (
    <Stack.Navigator initialRouteName = {Screens.LOGIN}>
      <Stack.Screen name={Screens.LOGIN} component={Login} options={optionheaders}/>
        <Stack.Screen name={Screens.HOMESCREENS} component={Home} options={optionheaders}/>
        <Stack.Screen name={Screens.ADDDATA} component={AddData}/>
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})