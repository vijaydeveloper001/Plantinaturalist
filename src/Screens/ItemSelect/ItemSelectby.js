import {
  FlatList,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  View
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {colors} from '../../Contants/Colors';
import {dummydata} from '../../Contants/Dummydata';
import { Screens } from '../../Contants/NaivgationName';
export default function ItemSelectby() {
  const navigation = useNavigation();
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.MainCon}
        onPress={() => navigation.navigate(Screens.DETAILSCREEN, {data: item})}>
        <Image source={item.img} style={styles.ImageShopStyle} />

        <Text style={styles.shopNameText} numberOfLines={1}>
          {item?.name ? item?.name : 'Testing'}
        </Text>
        <Text style={[styles.shopNameText, {color: 'grey'}]} numberOfLines={1}>
          {item?.name ? item?.name : '$ Testing'}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View >
    <FlatList
      data={dummydata}
      renderItem={renderItem}
      horizontal={true}
      showsVerticalScrollIndicator={false}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  MainCon: {
    width: 170,
    // marginTop: 15,
    borderRadius: 5,
   
  },
  ImageShopStyle: {
    width: '90%',
    height: 170,
    borderRadius: 5,
    resizeMode: 'cover',
  },
  shopNameText: {
    fontSize: 15,
    fontWeight: '500',
    color: colors.black,
    marginTop: 10,
  },
  contentContainerStyles: {
    marginTop: 20,
    paddingHorizontal: 20,
  },

  addToCart: {
    height: 40,
    backgroundColor: colors.lightgreen,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomEndRadius: 5,
    borderBottomLeftRadius: 5,
  },
  PriceCon: {
    flexDirection: 'row',
    // paddingVertical: 10,
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 3,
  },
  cureentprice: {
    textDecorationLine: 'line-through',
    fontSize: 15,
    fontWeight: '600',
  },
  discountPrice: {
    fontSize: 17,
    fontWeight: '500',
    color: colors.lightgreen,
  },
  addToCartText: {
    color: colors.white,
    fontWeight: '600',
  },
  discountText: {
    fontSize: 18,
    backgroundColor: colors.lightgreen,
    position: 'absolute',
    paddingVertical: 1,
    paddingHorizontal: 12,
    margin: 5,
    borderRadius: 3,
    color: colors.white,
  },
});
