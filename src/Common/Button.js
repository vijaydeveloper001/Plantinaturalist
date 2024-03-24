import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import { colors } from '../Contants/Colors';
import LinearGradient from 'react-native-linear-gradient';

export default function Button({TextName,press,stle,padding,height}) {
  return (
    <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}}  colors={['#A2D240', '#166D3B']} style={{...styles.addToCart,marginTop:stle?stle:0,marginBottom:padding?padding:null,height:height?height:40}} onPress={press?press:null}>
      <Text style={styles.addToCartText}>{TextName}</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  addToCart: {
    backgroundColor: colors.lightgreen,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal:20,
    borderRadius:5,
  },
  addToCartText: {
    color: colors.white,
    fontWeight: '600',
  },
});
