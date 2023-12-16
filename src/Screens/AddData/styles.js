import {StyleSheet} from 'react-native';
import {colors} from '../../Contants/Colors';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
export const styles = StyleSheet.create({
  Main: {
    flex: 1,
  },
  ItemCon: {
    backgroundColor: colors.grey,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 3,
    paddingHorizontal: 10,
  },
  TextInputCon: {
    marginLeft: 10,
    fontSize: responsiveFontSize(1.8),
    color: colors.black,
    fontWeight: '500',
    width: '88%',
  },
  ItemName: {
    color: colors.black,
    fontWeight: '600',
    fontSize: responsiveFontSize(1.8),
    width: '22%',
  },
  ImageUploadCon: {
    backgroundColor: colors.green,

    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    borderRadius: 3,
    marginTop: 20,
    width: '48%',
  },
  ImageText: {
    fontSize: responsiveFontSize(2),
    fontWeight: '600',
    color: colors.white,
  },
  imgStyle: {
    width: 300,
    height: 300,
    alignSelf: 'center',
  },
  CameraCon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  PostData: {
    
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    borderRadius: 3,
    marginTop: 20,
    marginHorizontal:20,
    marginBottom:20
  },
});
