import {StyleSheet} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Screens} from '../../Contants/NaivgationName';
import AddData from '../../Screens/AddData';
import DetailPlants from '../../Screens/Details/Details';
import {Profile} from '../../Screens/Profile/Profile';
import Shipping from '../../Screens/Shipping/Shipping';
import Notification from '../../Screens/Notification/Notification';
import Order from '../../Screens/Order/Order';
import Cart from '../../Screens/Cart/Cart';
import Favourite from '../../Screens/Favourite/Favourite';
import Coupons from '../../Screens/Coupons/Coupons';
import ProductDetail from '../../Screens/ProductDetail/ProductDetail';
import Search from '../../Screens/Search/Search';
import BottomNavigation from '../BottomNavigation/BottomNavigation';
import ShowOrder from '../../Screens/ShowOrders/ShowOrder';
import EditProfile from '../../Screens/EditProfile/EditProfile';
const Stack = createNativeStackNavigator();

const optionheaders = {
  headerShown: false,
};

export default function AppNavgigation() {
  return (
    <Stack.Navigator initialRouteName={'Bottom'}>
      <Stack.Screen
        name={'Bottom'}
        component={BottomNavigation}
        options={optionheaders}
      />
      <Stack.Screen name={Screens.ADDDATA} component={AddData} />
      <Stack.Screen
        name={Screens.DETAILSCREEN}
        component={DetailPlants}
        options={optionheaders}
      />
      <Stack.Screen
        name={Screens.PROFILE}
        component={Profile}
        options={optionheaders}
      />
      <Stack.Screen
        name={Screens.SHIPING}
        component={Shipping}
        options={optionheaders}
      />
      <Stack.Screen
        name={Screens.NOTIFICATION}
        component={Notification}
        options={optionheaders}
      />
      <Stack.Screen
        name={Screens.ORDER}
        component={Order}
        options={optionheaders}
      />
      <Stack.Screen
        name={Screens.CART}
        component={Cart}
        options={optionheaders}
      />
      <Stack.Screen
        name={Screens.FAV}
        component={Favourite}
        options={optionheaders}
      />
      <Stack.Screen
        name={Screens.COUPONS}
        component={Coupons}
        options={optionheaders}
      />
      <Stack.Screen
        name={Screens.PRODUCT}
        component={ProductDetail}
        options={optionheaders}
      />
      <Stack.Screen
        name={Screens.SEARCH}
        component={Search}
        options={optionheaders}
      />
      <Stack.Screen
        name={'ShowOrder'}
        component={ShowOrder}
        options={optionheaders}
      />
       <Stack.Screen
        name={'EditProfile'}
        component={EditProfile}
        options={optionheaders}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
