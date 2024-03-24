import {FlatList, StyleSheet, View, Image, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {colors} from '../../Contants/Colors';
import {PlantShop} from '../../Contants/Dummydata';

export default function Banner() {
  // const [data, setdata] = useState({
  //   indexofFlat: 0,
  // });
  const renderItems = ({item, index}) => {
    return (
      <View style={{...styles.RenderBannerCon,marginLeft:index==0?0:10}} key={item}>
        <Image source={item.img} style={styles.imageCon} resizeMode='cover' />
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
        // onScroll={e =>
        //   setdata({indexofFlat: parseInt(e.nativeEvent.contentOffset.x / 360)})
        // }
        keyExtractor={(item,index)=>index}
      />

      {/* <View style={styles.ConIndex}>
        {PlantShop.map((item, index) => {
          return (
            <View
              key={index}
              style={{
                width: index == data.indexofFlat ? 20 : 10,
                height: 10,
                backgroundColor: colors.lightgreen,
                marginRight: 5,
                borderRadius: 5,
              }}
            />
          );
        })}
      </View> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  MainBanner: {
    paddingHorizontal: 20,
    marginTop:5
    // backgroundColor:colors.lightblack
  },
  ContentCon: {
    marginTop: 5,
  },
  imageCon: {
    height: responsiveHeight(20),
    width: responsiveWidth(80),
    resizeMode:"contain",
    
    borderRadius:10
  },
  ConIndex: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 5,
    paddingVertical: 5,
  },
});
