import { FlatList, Text, View,Image } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { Images } from '../../assets/picture'
import { PlantShop, dummydata } from '../../Contants/Dummydata'
export default function ShopItemScreen({layer1}) {
    const renderItemShop = ({item,index}) =>{
        // console.log(item)
        return (
            <View style = {styles.MainCon} key={item}>
                <Image source={Images.Herbs} style = {styles.ImageShopStyle} resizeMode = 'contain'/>
                <Text style = {styles.shopNameText}>{item.name}</Text>
            </View>
        )
    }
  return (
    // <View>
      <FlatList
      data={layer1}
      renderItem={renderItemShop}
      numColumns={2}
      contentContainerStyle = {styles.contentContainerStyles}
      />
    // </View>
  )
}
