import {FlatList, Text, View, Image, SafeAreaView} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {Images} from '../../assets/picture';
export default function ShopItemScreen({layer1}) {
  const renderItemShop = ({item, index}) => {
   
    return (
      <View style={styles.MainCon} >
        <Image
          source={Images.Herbs}
          style={styles.ImageShopStyle}
          resizeMode="contain"
        />
        <Text style={styles.shopNameText}>{item.name}</Text>
      </View>
    );
  };
  return (
    <SafeAreaView>
     <FlatList
      data={layer1}
      renderItem={renderItemShop}
      numColumns={2}
      contentContainerStyle={styles.contentContainerStyles}
      keyExtractor={(item,index) => index}
      columnWrapperStyle = {{
          justifyContent:"space-between"
      }}
    />
    </SafeAreaView>
  );
}
