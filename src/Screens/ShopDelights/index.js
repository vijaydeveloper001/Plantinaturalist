import { FlatList, TouchableOpacity, View ,Image, SafeAreaView} from 'react-native'
import React from 'react'
import { styles } from './styles'
import { PlantShop } from '../../Contants/Dummydata'
export default function ShopDelights() {
    const renderItemShop = ({item,index}) =>{
        console.log(item)
        return (
          
                <TouchableOpacity style = {styles.MainCon}>
                <Image source={item.img} style = {styles.ImageShopStyle} resizeMode = 'contain'/>
               </TouchableOpacity>
          
 
        )
    }
  return (
    <SafeAreaView>
    <FlatList
    data={PlantShop}
    renderItem={renderItemShop}
    numColumns={2}
    contentContainerStyle = {styles.contentContainerStyles}
    columnWrapperStyle = {{justifyContent:"space-between"}}
    keyExtractor={(item,index)=>index}
    />
    </SafeAreaView>
   
  )
}
