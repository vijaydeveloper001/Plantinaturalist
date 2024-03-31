import { StyleSheet} from 'react-native'
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
import Shipping from '../../Screens/Shipping/Shipping';
import Notification from '../../Screens/Notification/Notification';
import Order from '../../Screens/Order/Order';
import Cart from '../../Screens/Cart/Cart';
import Favourite from '../../Screens/Favourite/Favourite';
import Coupons from '../../Screens/Coupons/Coupons';
import ProductDetail from '../../Screens/ProductDetail/ProductDetail';
import Search from '../../Screens/Search/Search';
const Stack = createNativeStackNavigator();

const optionheaders = {
    headerShown:false
}

export default function AppNavgigation() {
  return (
    <Stack.Navigator initialRouteName = {Screens.HOMESCREENS}>
      <Stack.Screen name={Screens.LOGIN} component={Login} options={optionheaders}/>
        <Stack.Screen name={Screens.HOMESCREENS} component={Home} options={optionheaders}/>
        <Stack.Screen name={Screens.ADDDATA} component={AddData}/>
        <Stack.Screen name={Screens.SIGNUP} component={SignupScreen}  options={optionheaders}/>
        <Stack.Screen name={Screens.SPLASH} component={SplashScreen}  options={optionheaders}/>
        <Stack.Screen name={Screens.DETAILSCREEN} component={DetailPlants}  options={optionheaders}/>
        <Stack.Screen name={Screens.PROFILE} component={Profile}  options={optionheaders}  />
        <Stack.Screen name={Screens.SHIPING} component={Shipping}  options={optionheaders}  />
        <Stack.Screen name={Screens.NOTIFICATION} component={Notification}  options={optionheaders}  />
        <Stack.Screen name={Screens.ORDER} component={Order}  options={optionheaders}  />
        <Stack.Screen name={Screens.CART} component={Cart}  options={optionheaders}  />
        <Stack.Screen name={Screens.FAV} component={Favourite}  options={optionheaders}  />
        <Stack.Screen name={Screens.COUPONS} component={Coupons}  options={optionheaders}  />
        <Stack.Screen name={Screens.PRODUCT} component={ProductDetail}  options={optionheaders}  />
        <Stack.Screen name={Screens.SEARCH} component={Search}  options={optionheaders}  />
    </Stack.Navigator>
    
  )
}

const styles = StyleSheet.create({})