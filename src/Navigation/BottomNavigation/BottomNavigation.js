import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{useState} from 'react'
import {responsiveHeight} from 'react-native-responsive-dimensions'
import { colors } from '../../Contants/Colors'
export default function BottomNavigation() {
    const [data, setdata] = useState({
        indexofBottom:0
    })
  return (
    <View style = {styles.BottomCon}>
      {
        [1,2,3,4].map((item,index)=>{
            return (
                <TouchableOpacity style= {{...styles.Btn,backgroundColor:data.indexofBottom==index?colors.lightgreen:colors.lightwheat}} onPress={()=>setdata({indexofBottom:index})} key = {index}>
                 <Text>Button</Text>
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