import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {Images} from '../../assets/picture';
import {useNavigation} from '@react-navigation/native';
import {Screens} from '../../Contants/NaivgationName';
import {colors} from '../../Contants/Colors';
import TypoGraphy from '../Typography';

export default function Header() {
  const navigation = useNavigation();
  return (
    <View style={styles.MainHeader}>
      <TypoGraphy style={styles.comHeader}>Home</TypoGraphy>
      <TouchableOpacity
        style={styles.IconHeartCon}
        onPress={() => navigation.navigate(Screens.FAV)}>
        <Image
          source={Images.fav}
          style={{width: 20, height: 20, tintColor: colors.white}}
        />
      </TouchableOpacity>
    </View>
  );
}
