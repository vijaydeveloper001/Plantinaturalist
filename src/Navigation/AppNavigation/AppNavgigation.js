import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../../Screens/Home/Home';
import { Screens } from '../../Contants/NaivgationName';
const Stack = createNativeStackNavigator();

const optionheaders = {
    headerShown:false
}

export default function AppNavgigation() {
  return (
    <Stack.Navigator>
        <Stack.Screen name={Screens.HOMESCREENS} component={Home} options={optionheaders}/>
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})