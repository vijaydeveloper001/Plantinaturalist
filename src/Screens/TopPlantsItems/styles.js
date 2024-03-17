import {StyleSheet} from 'react-native';
import {responsiveWidth} from 'react-native-responsive-dimensions';

export const styles = StyleSheet.create({
  ImageStyle: {
    width: 50,
    height: 50,
    borderRadius: responsiveWidth(20),
    margin: 5,
  },
  ContentContainerStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
});
