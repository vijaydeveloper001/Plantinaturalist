import { FlatList, Text, View,Image, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { Images } from '../../assets/Images'
import { PlantShop, dummydata } from '../../Contants/Dummydata'
export default function ShopItemScreen() {
    const renderItemShop = ({item,index}) =>{
        console.log(item)
        return (
            <View style = {styles.MainCon}>
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
            </View>
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
