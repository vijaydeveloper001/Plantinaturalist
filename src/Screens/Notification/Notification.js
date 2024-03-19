import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Images } from '../../assets/picture'
import { colors } from '../../Contants/Colors'
import Headers from '../../Common/Headers/Headers'

export default function Notification() {
  return (
    <View style = {styles.Main}>
        <Headers text={'Notification'}/>
      <Image source={Images.notification} style = {styles.ImageStyle}/>
    </View>
  )
}

const styles = StyleSheet.create({
    Main:{
        flex:1,
        backgroundColor:colors.white
    },
    ImageStyle:{
        alignSelf:"center",
        marginVertical:50
    }
})