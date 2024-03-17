import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {AppIcon, Images} from '../../assets/picture';
import {useNavigation} from '@react-navigation/native';
import {Screens} from '../../Contants/NaivgationName';
import { colors } from '../../Contants/Colors';
export default function Header() {
  const navigation = useNavigation();
  return (
    <View style={styles.MainHeader}>
      <View style={styles.MainHeaderLeftSideCon}>
        <TouchableOpacity>{Images.search}</TouchableOpacity>
        <TextInput placeholder="Search" style={styles.TextInputStyle} placeholderTextColor={colors.black}/>
      </View>
      <TouchableOpacity
        style={styles.IconHeartCon}
        onPress={() => navigation.navigate(Screens.ADDDATA)}>
        {Images.heart}
      </TouchableOpacity>
      <TouchableOpacity style={styles.IconHeartCon}>
        {AppIcon('heart', 29)}
      </TouchableOpacity>
    </View>
  );
}
