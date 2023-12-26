// SignupScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,ImageBackground } from 'react-native';
import { Images } from '../../assets/Images';
import { colors } from '../../Contants/Colors';
import  {firebase}  from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { Screens } from '../../Contants/NaivgationName';
import { KeyLogin, setItem } from '../../Contants/LocalDB';

const SignupScreen = () => {
  const navigation = useNavigation()
  // const [phoneNumber, setphoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setusername] = useState('');

  const handleSignup = async() => {
    try{
      const createUser = await firebase.auth().createUserWithEmailAndPassword(email,password)
      await createUser.user.updateProfile({
        displayName: username,
      }).then((dt)=>{
        console.log(dt)
      })
      const updatedUser = firebase.auth().currentUser;
      console.log(updatedUser)

      setEmail('');
      setPassword('');
      // setphoneNumber('');
      setusername('');
      console.log(createUser)
      await setItem(KeyLogin,updatedUser)
      navigation.navigate(Screens.HOMESCREENS)
      
    }catch(e){

    console.log(e,'>>>>>>>>>>>>>>>>>>>>>>>>>>');
    }
  };

  return (
    <ImageBackground source={Images.ImageBackground} style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={(text) => setusername(text)}
        value={username}
      />

    
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
      />
        {/* <TextInput
        style={styles.input}
        placeholder="Phone number"
        onChangeText={(text) => setphoneNumber(text)}
        value={phoneNumber}
      /> */}


      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 16,
    color:colors.lightgreen,
    textAlign:'center'
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 2,
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'blue',

    borderRadius: 8,
    height:50,
    justifyContent:'center'
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    // fontWeight: 'bold',
    fontSize:20,
    fontWeight:'600'
  },
});

export default SignupScreen;
