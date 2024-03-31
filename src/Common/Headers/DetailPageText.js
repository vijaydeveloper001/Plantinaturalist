import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Images} from '../../assets/picture';
import {colors} from '../../Contants/Colors';

export default function DetailPageText({text}) {
  return (
    <View style={styles.MainCon}>
      <Image source={Images.Flower} style={{width: 20, height: 20,borderRadius:2}} />
      <Text style={styles.TextDetail}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  MainCon: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal:20,
    marginTop:20
  },
  TextDetail: {
    color: colors.white,
    fontWeight: '600',
    marginLeft: 10,
  },
});
