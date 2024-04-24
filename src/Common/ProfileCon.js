import {StyleSheet, Text, Image, Pressable} from 'react-native';
import React from 'react';
import {Images} from '../assets/picture';
import {colors} from '../Contants/Colors';

export default function ProfileCon({text,press}) {
  return (
    <Pressable style={styles.Main} onPress={press}>
      <Image source={Images.user} style={{width: 20, height: 20}} />
      <Text
        style={{
          flex: 1,
          color: colors.black,
          fontSize: 17,
          marginLeft: 20,
        }}>
        {text}
      </Text>
      <Image source={Images.rightArrow} style={{width: 15, height: 15}} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  Main: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
});
