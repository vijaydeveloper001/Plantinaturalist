import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Images} from '../../assets/picture';
import {colors} from '../../Contants/Colors';

export default function DetailPageText({text}) {
  return (
    <View style={styles.MainCon}>
      <View style = {styles.imagesCon}>
      <Image source={Images.Flower} style={styles.plantiCON} />
      </View>
      <Text style={styles.TextDetail}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  MainCon: {
   
    // alignItems: 'center',
    // paddingHorizontal: 20,
  },
  TextDetail: {
    color: colors.black,
    fontWeight: '600',
    marginTop: 8,
  },
  plantiCON: {
    width: '100%',
    height: '100%',
    borderRadius: 2,
    borderRadius:999,
  },
  imagesCon:{
    backgroundColor:colors.grey,
    borderRadius:999,
    padding:5,
  width:40,
  height:40
  }
});
