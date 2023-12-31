import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import {colors} from '../../Contants/Colors';
import {AppIcon} from '../../assets/Images';
import {Screens} from '../../Contants/NaivgationName';
import {useNavigation} from '@react-navigation/native';

const bottomdata = [
  {
    img: 'home',
    color: colors.lightgreen,
  },
  {
    img: 'address-book',
    color: colors.lightgreen,
  },
  {
    img: 'plus',
    color: colors.lightgreen,
    onPress: Screens.ADDDATA,
  },
  {
    img: 'inbox',
    color: colors.lightgreen,
  },
  {
    img: 'user',
    color: colors.lightgreen,
    onPress: Screens.PROFILE
  },
];

export default function BottomNavigation() {
  const navigation = useNavigation();
  const [data, setdata] = useState({
    indexofBottom: 0,
  });

  return (
    <View style={styles.BottomCon}>
      {bottomdata.map((item, index) => {
        return (
          <TouchableOpacity
            style={{
              ...styles.Btn,
              backgroundColor:
                data.indexofBottom == index
                  ? colors.lightgreen
                  : colors.lightwheat,
            }}
            onPress={() => {
              setdata({indexofBottom: index});
              if (item?.onPress) {
                navigation.navigate(item?.onPress);
              } else console.log('onPress>>>>>>>>>>>>');
            }}
            key={index}>
            {index == data.indexofBottom
              ? AppIcon(item.img, 25, 'white')
              : AppIcon(item.img, 25, item.color)}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  BottomCon: {
    height: responsiveHeight(8),
    backgroundColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  Btn: {
    padding: 8,
    backgroundColor: colors.white,
    borderRadius: 5,
  },
});
