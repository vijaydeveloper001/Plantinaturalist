import { FlatList, Text, View,Image, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { Images } from '../../assets/picture'
import { PlantShop, dummydata } from '../../Contants/Dummydata';
import FastImage from 'react-native-fast-image';
import { useNavigation } from '@react-navigation/native';
import { Screens } from '../../Contants/NaivgationName';
export default function ShopItemScreen({dataofsellers}) {
    const navigation = useNavigation()
    console.log(dataofsellers?.data,'hello')
    const renderItemShop = ({item,index}) =>{
        console.log(item)
        return (
            <TouchableOpacity style = {styles.MainCon} onPress={()=>navigation.navigate(Screens.DETAILSCREEN,{data:PlantShop[index]})} key={index}>
                <ImageBackground source={item.img} style = {styles.ImageShopStyle} >
                    <Text style = {styles.discountText}>-25%</Text>
                </ImageBackground>
                <Text style = {styles.shopNameText}>{item.title}</Text>
                <View style = {styles.PriceCon}>
                <Text style = {styles.cureentprice}>रु 3,000</Text>
                <Text  style = {styles.discountPrice}>रु 2,000</Text>

                </View>
                <TouchableOpacity style = {styles.addToCart}>
                    <Text style = {styles.addToCartText}>ADD TO CART</Text>
                </TouchableOpacity>
            </TouchableOpacity>
        )
    }
    
  return (
    // <View>
      <FlatList
      data={PlantShop}
      renderItem={renderItemShop}
      numColumns={2}
      contentContainerStyle = {styles.contentContainerStyles}
      />
    // </View>
  )
}
