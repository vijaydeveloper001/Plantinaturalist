import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { AppIcon, Images } from '../../assets/Images'
export default function Header() {
  return (
    <View style = {styles.MainHeader}>
      <View style = {styles.MainHeaderLeftSideCon}>
        <TouchableOpacity>
            {Images.search}
        </TouchableOpacity>
        <TextInput placeholder='Search' style = {styles.TextInputStyle}/>
      </View>
      <TouchableOpacity style= {styles.IconHeartCon}>
         {Images.heart}
      </TouchableOpacity><TouchableOpacity style= {styles.IconHeartCon}>
        {AppIcon('heart',29)}
      </TouchableOpacity>
    </View>
  )
}

