import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React from 'react';
import {dummydata} from '../../Contants/Dummydata';
import {colors} from '../../Contants/Colors';
import Headers from '../../Common/Headers/Headers';
import {Images} from '../../assets/picture';
import { Screens } from '../../Contants/NaivgationName';

export default function ProductDetail({navigation}) {
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.MainCon}
        onPress={() => navigation.navigate(Screens.DETAILSCREEN, {data: item})}>
        <Image source={item.img} style={styles.ImageShopStyle} />

        <View>
          <TouchableOpacity>
            <Image
              source={Images.fav}
              style={{
                width: 20,
                height: 20,
                position: 'absolute',
                right: 0,
                bottom: 0,
                top: 5,
              }}
            />
          </TouchableOpacity>
          <Text style={styles.shopNameText} numberOfLines={1}>
            Indoor
          </Text>
          <Text
            style={[styles.shopNameText, {color: 'grey', fontWeight: '400'}]}
            numberOfLines={1}>
            Plant indoor without water
          </Text>
          <Text
            style={{
              color: colors.lightgreen,
              fontSize: 18,
              fontWeight: '600',
              ...styles.shopNameText,
            }}>
            रु 832{' '}
            <Text
              style={{
                textDecorationLine: 'line-through',
                color: colors.lightgreen2,
              }}>
              {' '}
              रु 1000
            </Text>
            <Text style={{fontWeight: '400', color: colors.red}}>
              {' '}
              50% off{' '}
            </Text>
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.Main}>
      <Headers text={'Product'} />
      <FlatList
        data={[...dummydata, ...dummydata]}
        renderItem={renderItem}
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        contentContainerStyle={{paddingHorizontal: 20, paddingBottom: 40}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  Main: {
    flex: 1,
  },
  MainCon: {
    width: '48%',
    marginTop: 15,
    borderRadius: 5,
    marginRight: 15,
  },
  ImageShopStyle: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  shopNameText: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.black,
    marginTop: 1,
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
