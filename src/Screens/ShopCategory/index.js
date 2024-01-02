import { FlatList, Text, View,Image } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { Images } from '../../assets/Images'
import { PlantShop, dummydata } from '../../Contants/Dummydata'
export default function ShopItemScreen() {
    const renderItemShop = ({item,index}) =>{
        console.log(item)
        return (
            <View style = {styles.MainCon}>
                <Image source={item.img} style = {styles.ImageShopStyle} resizeMode = 'contain'/>
                <Text style = {styles.shopNameText}>{item.title}</Text>
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
