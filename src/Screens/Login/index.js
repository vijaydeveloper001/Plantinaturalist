import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {AppIcon, Images} from '../../assets/Images';
import {colors} from '../../Contants/Colors';

export default function Login() {
  return (
    <ImageBackground source={Images.ImageBackground} style={styles.mainCons}>
      <StatusBar translucent backgroundColor="transparent" />
      <Text style={styles.headerText}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.buttonText}> Login</Text>
      </TouchableOpacity>
      <View style={styles.SocialBtn}>
        <TouchableOpacity style={styles.facebookButton}>
          {AppIcon('facebook', 25, 'white')}
          <Text style={styles.buttonText}>Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{...styles.facebookButton, ...styles.googleButton}}>
          {AppIcon('google', 25, 'white')}
          <Text style={styles.buttonText}> Google</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  mainCons: {
    flex: 1,
    justifyContent: 'center',
    // alignItems:'center'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  headerText: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 20,
    color: colors.lightgreen,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 0.2,
    marginTop: 10,
    padding: 10,
    marginHorizontal: 20,
    color: 'black',
    fontSize: 15,
  },
  loginButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    //   width: '100%',
    alignItems: 'center',
    marginBottom: 10,
    marginHorizontal: 20,
    marginTop: 20,
  },
  facebookButton: {
    backgroundColor: '#3b5998',

    borderRadius: 5,
    width: '40%',
    height: 40,

    alignItems: 'center',
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  googleButton: {
    backgroundColor: '#dd4b39',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  SocialBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,

    alignItems: 'flex-end',
    marginTop: 100,
  },
});
