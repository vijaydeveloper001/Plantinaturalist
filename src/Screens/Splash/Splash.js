// SplashScreen.js
import React, {useEffect} from 'react';
import {View, Image, StyleSheet, StatusBar} from 'react-native';
import {Images} from '../../assets/Images';
import {Screens} from '../../Contants/NaivgationName';
import { KeyLogin, getItem } from '../../Contants/LocalDB';

export const SplashScreen = ({navigation}) => {
  useEffect(() => {

    let userdata = getItem(KeyLogin)
    const timeout = setTimeout(() => {
    if (userdata){
        navigation.reset({
            index: 0,
            routes: [{name: Screens.HOMESCREENS}],
          });
    }else  navigation.reset({
        index: 0,
        routes: [{name: Screens.LOGIN}],
      });
    }, 2000);

    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <Image source={Images.ImageBackground} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff', // Set background color as needed
  },
  image: {
    width: '100%', // Set the width of the image
    height: '100%', // Set the height of the image
  },
});
