import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Headers from '../../Common/Headers/Headers'
import TextInputCon from '../../Common/TextInputCon'
import ShopItemScreen from '../ShopCategory/ShopItemScreen'

export default function Search() {
  return (
    <View>
      <Headers text='Search' icon={true}/>
      <TextInputCon search={true} text='Search...' />
      <ShopItemScreen layer1={[0,1,2,36]}/>
    </View>
  )
}

const styles = StyleSheet.create({})