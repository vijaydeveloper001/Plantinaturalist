import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {Images} from '../../assets/picture';
import {useNavigation} from '@react-navigation/native';
import {Screens} from '../../Contants/NaivgationName';
import {colors} from '../../Contants/Colors';

export default function Header() {
  const navigation = useNavigation();
  return (
    <View style={styles.MainHeader}>
      <View style={styles.MainHeaderLeftSideCon}>
        <View style = {{justifyContent:"space-around"}}>
          <Text
            style={{color: colors.lightgreen, marginLeft: 7,fontSize:20}}
            numberOfLines={1}>
            Vijay kumar
          </Text>
          <Text style={{color: 'grey', marginLeft: 7}} numberOfLines={1}>
            Mohali,Chandigarh
          </Text>
        </View>
      </View>
      <View />
      <TouchableOpacity style={styles.IconHeartCon}>
        <Image
          source={Images.wallet}
          style={{width: 20, height: 20, tintColor: colors.white}}
        />
      </TouchableOpacity>
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
