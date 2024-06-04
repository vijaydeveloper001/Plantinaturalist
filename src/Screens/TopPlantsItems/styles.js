import {StyleSheet} from 'react-native';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import {colors} from '../../Contants/Colors';

export const styles = StyleSheet.create({
  ImageStyle: {
    width: 60,
    height: 60,
    borderRadius: responsiveWidth(20),
  },
  ContentContainerStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    paddingVertical: 25,
    
  },
  BorderLine: {
    borderWidth: 2,
    borderColor: colors.lightgreen,
    justifyContent: 'center',
    alignItems: 'center',
    // marginRight:20,
    borderRadius: responsiveWidth(20),
    padding: 5,
    alignSelf: 'center',
  },
  TextColor: {
    color: colors.black,
    fontSize:13,
    marginTop: 10,
    // alignSelf: 'center',
    alignSelf:"center",
    width:40,
  
  },
});
