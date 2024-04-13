import {FlatList, StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React from 'react';
import {Images} from '../../assets/picture';
import {colors} from '../../Contants/Colors';
import Headers from '../../Common/Headers/Headers';

const data = [
  {
    order: 'Your order has been deliverd',
    rating: true,
    img: Images.Flower,
  },
  {
    order: 'Your order has been canceled',
    rating: false,
    img: Images.Herbs,
  },
  {
    order: 'Your order has been deliverd',
    rating: true,
    img: Images.Indoor,
  },
  {
    order: 'Your order has been canceled',
    rating: false,
    img: Images.Vegitable,
  },
  {
    order: 'Your order has been deliverd',
    rating: true,
    img: Images.Herbs,
  },
  {
    order: 'Your order has been canceled',
    rating: false,
    img: Images.nature,
  },
  {
    order: 'Your order has been deliverd',
    rating: true,
    img: Images.Flower,
  },
  {
    order: 'Your order has been canceled',
    rating: false,
    img: Images.Herbs,
  },
];
export default function Favourite() {
  const favItem = ({item}) => {
    return (
      <View style={styles.favCon}>
        <Image source={item.img} style={{width: 100, height: '100%'}} />
        <View style={styles.ItemText}>
          <Text style={styles.TextFav}>{item.order}</Text>
          <Text style={styles.TextFav}>Items 2</Text>
        </View>
        <Pressable style={{alignSelf: 'flex-start'}}>
          <Image source={Images.close} style={{width: 15, height: 15}} />
        </Pressable>
      </View>
    );
  };
  return (
    <View style={{flex: 1}}>
      <Headers text={'Favourite'} />
      <FlatList
        data={data}
        renderItem={favItem}
        contentContainerStyle={{paddingBottom: 40}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  favCon: {
    height: 120,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    backgroundColor: 'white',
    elevation: 5,
    padding: 20,
    borderRadius: 10,
  },
  TextFav: {
    color: colors.black,
    width: 200,
  },
  ItemText: {
    justifyContent: 'flex-start',
  },
});
