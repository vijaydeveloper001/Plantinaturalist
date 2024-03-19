import {StyleSheet} from 'react-native';
import {colors} from '../../Contants/Colors';
import { responsiveWidth } from 'react-native-responsive-dimensions';
export const styles = StyleSheet.create({
  MainCon: {
    width: '48%',
    marginTop: 10,
    // paddingHorizontal: 20,
    // backgroundColor:'white',
    // elevation:10
  },
  ImageShopStyle: {
    width: '100%',
    height: 200,
    borderRadius: 5,
  },
  shopNameText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    color: colors.black,
    marginTop: 10,
  },
  contentContainerStyles: {
    // justifyContent: 'space-between',
    // marginHorizontal:20,
    marginTop: 20,
    paddingHorizontal:20
  },
});
