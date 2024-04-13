import {
  FlatList,
  StyleSheet,
  View,
  Image,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {PlantShop} from '../../Contants/Dummydata';

export default function Banner() {
  const renderItems = ({item, index}) => {
    return (
      <View
        style={{...styles.RenderBannerCon, marginLeft: index == 0 ? 0 : 10}}
        key={item}>
        <Image source={item.img} style={styles.imageCon} resizeMode="cover" />
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.MainBanner}>
      <FlatList
        data={PlantShop}
        renderItem={renderItems}
        contentContainerStyle={styles.ContentCon}
        horizontal={true}
        keyExtractor={(item, index) => index}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  MainBanner: {
    paddingHorizontal: 20,
    marginTop: 5,
  },
  ContentCon: {
    marginTop: 5,
  },
  imageCon: {
    height: responsiveHeight(20),
    width: responsiveWidth(80),
    resizeMode: 'contain',
    borderRadius: 5,
  },
  ConIndex: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 5,
    paddingVertical: 5,
  },
});
