import { FlatList, Pressable,Image,StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Images } from '../../assets/picture'
import { colors } from '../../Contants/Colors'
import Header from '../../Common/Headers/Header'
import Headers from '../../Common/Headers/Headers'

export default function ShowOrder({route}) {
  const {data} = route?.params
  const renderItem = ({item,index})=>{
    console.log(item)
    return <Pressable style={styles.MainConItem} key={index}>
    <View style={styles.inMain}>
      <Image source={Images.Flower} style={{width: 80, height: '100%'}} />
      <View style={{flex: 1, paddingLeft: 12}}>
        <Text style={styles.DateText} numberOfLines={1}>
         Name: {item?.name}
        </Text>
        <Text style={styles.DateText} numberOfLines={1}>
        SellPrice: {item?.sellPrice}
        </Text>
        <Text style={styles.DateText} numberOfLines={1}>
         MRP: {item?.mrp}
        </Text>
        
      </View>
    </View>
    </Pressable>
  }
  return (
    <View style = {{flex:1}}>
      <Headers text={'Show Order Items'}/>
      <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item,index)=>index}
      contentContainerStyle = {{marginHorizontal:20}}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  MainConItem: {
    backgroundColor: colors.white,
    elevation: 1,
    marginVertical: 10,
  },
  DateText: {
    color: colors.black,
    marginTop: 10,
    fontSize: 14,
  },
  inMain: {
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 0.9,
  },
})