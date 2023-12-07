import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{useState} from 'react'
import {responsiveHeight} from 'react-native-responsive-dimensions'
import { colors } from '../../Contants/Colors'
import { AppIcon } from '../../assets/Images'

const bottomdata = [
  {
    img:'home'
  },
  {
    img:'address-book'
  }
  , {
    img:'inbox'
  },
  {
    img:'buysellads'
  }
]


export default function BottomNavigation() {
    const [data, setdata] = useState({
        indexofBottom:0,
    })

  return (
    <View style = {styles.BottomCon}>
      {
        bottomdata.map((item,index)=>{
            return (
                <TouchableOpacity style= {{...styles.Btn,backgroundColor:data.indexofBottom==index?colors.lightgreen:colors.lightwheat}} onPress={()=>setdata({indexofBottom:index})} key = {index}>
                 {index==data.indexofBottom?AppIcon(item.img,25,'white'):AppIcon(item.img,25)}
                </TouchableOpacity>
            )
        })
      }
    </View>
  )
}

const styles = StyleSheet.create({
    BottomCon:{
        height:responsiveHeight(8),
        backgroundColor:colors.white,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:20,
        
    },
    Btn:{
        padding:8,
        backgroundColor:colors.white,
        borderRadius:5
    }
})