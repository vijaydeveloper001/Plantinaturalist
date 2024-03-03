import {
  FlatList,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {Images} from '../../assets/picture';
import {useNavigation} from '@react-navigation/native';
import {Screens} from '../../Contants/NaivgationName';
import Button from '../../Common/Button';
export default function ShopItemScreen({productData}) {
  const navigation = useNavigation();

  const renderItemShop = ({item, index}) => {
    return (
      <TouchableOpacity
        style={styles.MainCon}
        onPress={() => navigation.navigate(Screens.DETAILSCREEN, {data: item})}
        key={item.id}>
        <ImageBackground source={Images.Flower} style={styles.ImageShopStyle}>
          <Text style={styles.discountText}>-25%</Text>
        </ImageBackground>
        <Text style={styles.shopNameText}>
          {item?.name ? item?.name : 'Testing'}
        </Text>
        <Text style={styles.shopNameText}>
          Stock: {item?.countInStock ? item?.countInStock : 5}
        </Text>

        <View style={styles.PriceCon}>
          {/* <Text style = {styles.cureentprice}>रु 3,000</Text> */}
          <Text style={styles.discountPrice}>
            रु {item?.price ? item?.price : 100}
          </Text>
        </View>
        <Text style={{...styles.shopNameText, fontSize: 12, paddingBottom: 10}}>
          Rating: {item?.rating ? item?.rating : 'Testing'}
        </Text>
        <TouchableOpacity style={styles.addToCart}>
          <Text style={styles.addToCartText}>Add to cart</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  return (
    // <View>
    <FlatList
      data={productData}
      renderItem={renderItemShop}
      numColumns={2}
      contentContainerStyle={styles.contentContainerStyles}
    />
    // </View>
  );
}
