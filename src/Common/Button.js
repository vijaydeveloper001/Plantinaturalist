import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import { colors } from '../Contants/Colors';

export default function Button({TextName,press,stle}) {
  return (
    <TouchableOpacity style={{...styles.addToCart,marginTop:stle?stle:0}} onPress={press?press:null}>
      <Text style={styles.addToCartText}>{TextName}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  addToCart: {
    height: 40,
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
