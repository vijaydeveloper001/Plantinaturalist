import {StyleSheet} from 'react-native';
import {colors} from '../../Contants/Colors';
export const styles = StyleSheet.create({
  MainCon: {
    width: 190,
    marginTop: 15,
    backgroundColor: 'white',
    elevation: 10,
    borderRadius:5
  },
  ImageShopStyle: {
    width: '100%',
    height: 150,
    borderTopRightRadius:5,
    borderTopLeftRadius:5,
    resizeMode:"cover"
  },
  shopNameText: {
    fontSize: 15,
    fontWeight: '500',
    color: colors.black,
    marginTop: 3,
    paddingHorizontal: 20,
  },
  contentContainerStyles: {
    marginTop: 20,
    paddingHorizontal: 20,
  },

  addToCart: {
    height: 40,
    backgroundColor: colors.lightgreen,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomEndRadius:5,
    borderBottomLeftRadius:5
  },
  PriceCon: {
    flexDirection: 'row',
    // paddingVertical: 10,
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop:3
  },
  cureentprice: {
    textDecorationLine: 'line-through',
    fontSize: 15,
    fontWeight: '600',
  },
  discountPrice: {
    fontSize: 17,
    fontWeight: '500',
    color: colors.lightgreen,
  },
  addToCartText: {
    color: colors.white,
    fontWeight: '600',
  },
  discountText: {
    fontSize: 18,
    backgroundColor: colors.lightgreen,
    position: 'absolute',
    paddingVertical: 1,
    paddingHorizontal: 12,
    margin: 5,
    borderRadius: 3,
    color: colors.white,
  },
});
