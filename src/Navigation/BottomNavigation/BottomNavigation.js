import {Image} from 'react-native';
import React from 'react';
import {Images} from '../../assets/picture';
import {Screens} from '../../Contants/NaivgationName';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../Screens/Home/Home';
import {Profile} from '../../Screens/Profile/Profile';
import Cart from '../../Screens/Cart/Cart';
import Order from '../../Screens/Order/Order';
import { colors } from '../../Contants/Colors';
const Tab = createBottomTabNavigator();
export default function BottomNavigation() {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {backgroundColor: colors.lightgreen}
        }}>
        <Tab.Screen
          name={Screens.HOMESCREENS}
          component={Home}
          options={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarIcon: () => (
              <Image
                source={Images.HomeIcon}
                style={{width: 20, height: 20, tintColor: 'white'}}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Cart"
          component={Cart}
          options={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarIcon: () => (
              <Image
                source={Images.shopingIcon}
                style={{width: 20, height: 20, tintColor: 'white'}}
              />
            ),
          }}
        />
       
        <Tab.Screen
          name={Screens.ORDER}
          component={Order}
          options={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarIcon: () => (
              <Image
                source={Images.order}
                style={{width: 20, height: 20, tintColor: 'white'}}
              />
            ),
          }}
        />
         <Tab.Screen
          name="PROFILE"
          component={Profile}
          options={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarIcon: () => (
              <Image
                source={Images.user}
                style={{width: 20, height: 20, tintColor: 'white'}}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}
