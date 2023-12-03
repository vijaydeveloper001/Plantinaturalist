import { Text, TextInput, View } from 'react-native'
import React from 'react'
import { styles } from './styles'
export default function Header() {
  return (
    <View style = {styles.MainHeader}>
      <View style = {styles.MainHeaderLeftSideCon}>
        <Text>Image</Text>
        <TextInput placeholder='Search' style = {styles.TextInputStyle}/>
      </View>
      <View style= {styles.IconHeartCon}>
        <Text>h</Text>
      </View><View style= {styles.IconHeartCon}>
        <Text>h</Text>
      </View>
    </View>
  )
}

