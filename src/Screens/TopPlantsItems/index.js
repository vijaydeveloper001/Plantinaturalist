import { FlatList, Text, View ,Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { PlantShop } from '../../Contants/Dummydata'
import { styles } from './styles'
export default function TopPlants() {
    const renderItemFunction = ({item,index}) =>{
        return (
            <TouchableOpacity key={index}>
                <Image source={item.img} style = {styles.ImageStyle}/>
            </TouchableOpacity>
        )
    }
  return (
   <FlatList
   data={PlantShop}
   renderItem = {renderItemFunction}
   contentContainerStyle = {styles.ContentContainerStyle}
   />
  )
}