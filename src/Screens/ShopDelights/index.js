import { FlatList, Text, TouchableOpacity, View ,Image} from 'react-native'
import React from 'react'
import { styles } from './styles'
import { PlantShop } from '../../Contants/Dummydata'
import { responsiveHeight } from 'react-native-responsive-dimensions'
export default function ShopDelights() {
    const renderItemShop = ({item,index}) =>{
        console.log(item)
        return (
            // <View style ={{justifyContent:'center',alignItems:'center',width:'50%',height:200,borderWidth:2,borderColor:'pink',borderRadius:responsiveHeight(40),marginTop:20}}>
                <TouchableOpacity style = {styles.MainCon} key={index}>
                <Image source={item.img} style = {styles.ImageShopStyle} resizeMode = 'contain'/>
               </TouchableOpacity>
            // </View>
 
        )
    }
  return (
    <FlatList
    data={PlantShop}
    renderItem={renderItemShop}
    numColumns={2}
    contentContainerStyle = {styles.contentContainerStyles}
    />
   
  )
}
