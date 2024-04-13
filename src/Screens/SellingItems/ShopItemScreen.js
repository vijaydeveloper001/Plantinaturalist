import {
  FlatList,
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {Images} from '../../assets/picture';
import {useNavigation} from '@react-navigation/native';
import {Screens} from '../../Contants/NaivgationName';
import LinearGradient from 'react-native-linear-gradient';
export default function ShopItemScreen({productData}) {
  const navigation = useNavigation();

  const renderItemShop = ({item, index}) => {
    return (
      <TouchableOpacity
        style={styles.MainCon}
        onPress={() => navigation.navigate(Screens.DETAILSCREEN, {data: item})}>
        <Image source={Images.Flower} style={styles.ImageShopStyle} />
        <Text style={styles.discountText}>-25%</Text>
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
        <LinearGradient
          colors={['#A2D240', '#166D3B']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={styles.addToCart}>
          <Text style={styles.addToCartText}>Add to cart</Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView>
      <FlatList
        data={productData}
        renderItem={renderItemShop}
        numColumns={2}
        contentContainerStyle={styles.contentContainerStyles}
        keyExtractor={(item, index) => index}
        columnWrapperStyle={{justifyContent: 'space-between'}}
      />
    </SafeAreaView>
  );
}
