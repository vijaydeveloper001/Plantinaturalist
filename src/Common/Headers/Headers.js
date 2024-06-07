import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Pressable,
} from 'react-native';
import React from 'react';
import {colors} from '../../Contants/Colors';
import {Images} from '../../assets/picture';
import {useNavigation} from '@react-navigation/native';
import {Screens} from '../../Contants/NaivgationName';

export default function Headers({text, icon}) {
  const navigation = useNavigation();
  return (
    <View style={styles.Main}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          source={Images.back}
          style={{width: 15, height: 15, tintColor: colors.black}}
        />
      </TouchableOpacity>
      <Text style={[styles.HeaderText, {textAlign: icon ? 'left' : 'center'}]}>
        {text}
      </Text>
      {icon && (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            flex: 0.2,
            alignItems: 'center',
          }}>
          <Pressable onPress={() => navigation.navigate(Screens.HOMESCREENS)}>
            <Image
              source={Images.HomeIcon}
              style={{width: 20, height: 20, tintColor: colors.white}}
            />
          </Pressable>
          <Pressable onPress={() => navigation.navigate(Screens.CART)}>
            <Image
              source={Images.Cart}
              style={{width: 25, height: 25, tintColor: colors.white}}
            />
          </Pressable>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  Main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f2f2f0',
    height: 40,
    paddingHorizontal: 20,
  },
  HeaderText: {
    fontSize: 20,
    fontWeight: '400',
    color: colors.black,
    flex: 1,
    marginLeft: 10,
  },
});
