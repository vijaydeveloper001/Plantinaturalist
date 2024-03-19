import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import {colors} from '../../Contants/Colors';
import {Images} from '../../assets/picture';
import {useNavigation} from '@react-navigation/native';

export default function Headers({text}) {
  const navigation = useNavigation();
  return (
    <View style={styles.Main}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          source={Images.back}
          style={{width: 30, height: 20, tintColor: colors.white}}
        />
      </TouchableOpacity>
      <Text style={styles.HeaderText}>{text}</Text>
      <View />
    </View>
  );
}

const styles = StyleSheet.create({
  Main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.lightgreen,
    height: 40,
    paddingHorizontal: 20,
  },
  HeaderText: {
    fontSize: 20,
    fontWeight: '500',
    color: colors.white,
  },
});
