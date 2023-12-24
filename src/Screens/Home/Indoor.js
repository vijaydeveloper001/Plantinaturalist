import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {AppIcon, Images} from '../../assets/Images';
import {
  responsiveHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import {colors} from '../../Contants/Colors';
import {useNavigation} from '@react-navigation/native';
import {Screens} from '../../Contants/NaivgationName';
import FastImage from 'react-native-fast-image';
export default function Indoor({dataProps}) {
  const navigation = useNavigation();
  const renderItemIndoor = ({item, index}) => {
    return (
      <TouchableOpacity
        style={{...styles.RenderItem}}
        // onPress={()=>navigation.navigate(Screens.ADDDATA)}
      >
        <FastImage source={{uri: item.image}} style={styles.ImageCon} resizeMode = 'cover'/>
        <TouchableOpacity style={styles.LikeCon}>
          {AppIcon('heart', 25, 'red')}
        </TouchableOpacity>

        <Text style={styles.TypeText}>{item.Name}</Text>
        <Text style={styles.TypeTextRoseName}>{item.Soil}</Text>
        <Text style={styles.TypeTextRoseName}>{item.Location}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.MainIndoor}>
      <FlatList
        data={dataProps}
        renderItem={renderItemIndoor}
        showsHorizontalScrollIndicator={false}
  
      />
    </View>
  );
}

const styles = StyleSheet.create({
  MainIndoor: {
    paddingHorizontal: 20,
    marginTop: 22,
    paddingVertical: 10,
  },
  RenderItem: {
    // height:320,
    // width:250,
    backgroundColor: colors.white,
    borderRadius: 5,
    marginTop: 20,
    paddingBottom: 5,
  },
  ImageCon: {
    width: '100%',
    height: 230,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
  },
  TypeText: {
    fontSize: 20,
    color: colors.gray,
    paddingLeft: 10,
    marginTop: 5,
  },
  TypeTextRoseName: {
    fontSize: 25,
    fontWeight: '700',
    color: colors.black,
    paddingLeft: 10,
  },
  LikeCon: {
    width: 30,
    height: 30,
    backgroundColor: colors.white,
    borderRadius: 5,
    position: 'absolute',
    right: 0,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
