import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Headers from '../../Common/Headers/Headers'
import TextInputCon from '../../Common/TextInputCon'
import ItemSelectby from '../ItemSelect/ItemSelectby'
import { colors } from '../../Contants/Colors'
import { Screens } from '../../Contants/NaivgationName'

export default function Search({navigation}) {
  return (
    <View>
      <Headers text='Search' icon={true}/>
      <View style = {{paddingHorizontal:10}}>
      <TextInputCon search={true} text='Search...' /> 
      <View style = {styles.viewCon}>
        <Text style = {styles.title}>Best Deals For Your</Text>
        <Text style =  {styles.viewAll} onPress={()=>navigation.navigate(Screens.PRODUCT)}>View all</Text>
      </View>
      <ItemSelectby />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  title:{
    color:colors.black,
  },
  viewAll:{
    color:colors.lightgreen3
  },
  viewCon:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginHorizontal:20,
    paddingVertical:20
  }
})