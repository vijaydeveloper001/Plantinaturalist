import {FlatList, Pressable, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Images} from '../../assets/picture';
import {colors} from '../../Contants/Colors';
import Header from '../../Common/Headers/Header';
import Headers from '../../Common/Headers/Headers';

export default function ShowOrder({route}) {
  const {data} = route?.params;
  const renderItem = ({item, index}) => {
    console.log(item);
    return (
      <Pressable style={styles.MainConItem} key={index}>
        <View style={styles.inMain}>
          <Image source={Images.Flower} style={{width: 80, height: '100%'}} />
          <View style={styles.itemName}>
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
    );
  };
  return (
    <View style={{flex: 1}}>
      <Headers text={'Show Order Items'} />
      <FlatList
        data={data?.products}
        renderItem={renderItem}
        keyExtractor={(item, index) => index}
        contentContainerStyle={{marginHorizontal: 20}}
        ListFooterComponent={()=>{
          return <View style={styles.total}>
          <View style = {styles.inCon}>
            <Text style = {[styles.DateText]}>Total Mrp</Text>
            <Text style = {[styles.DateText]}>Total Price</Text>
          </View>
          <View style = {styles.inCon}>
            <Text style = {[styles.DateText]}>{data?.totalmrp}</Text>
            <Text style = {[styles.DateText]}>{data?.total}</Text>
          </View>
        </View>
        }}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  MainConItem: {
    backgroundColor: colors.white,
    elevation: 1,
    marginVertical: 10,
    height:90
  },
  DateText: {
    color: colors.black,
    fontSize: 14,
  },
  inMain: {
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height:90
  },
  total: {
    backgroundColor:'#fff',
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    borderRadius:5,
    padding:10,
    height:90
  },
  itemName:{
    flex:1,
    paddingLeft: 12,
    justifyContent:"space-around",
    height:90
  },
  inCon:{
    justifyContent:"space-around",
    height:80
  }
});
