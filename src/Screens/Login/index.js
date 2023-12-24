import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect,useState} from 'react';
import {AppIcon, Images} from '../../assets/Images';
import {colors} from '../../Contants/Colors';
import {
  GoogleSignin,
  statusCodes,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import { useNavigation } from '@react-navigation/native';
import { Screens } from '../../Contants/NaivgationName';
import { firebase } from '@react-native-firebase/auth';
import { KeyLogin, getItem, setItem } from '../../Contants/LocalDB';
export default function Login() {
  const [data, setdata] = useState({
    email:'',
    password:''
  })
  const navigation = useNavigation()
  useEffect(() => {
    console.log('GoogleSignin>>>>>');
    GoogleSignin.configure({
      webClientId:'605322469789-l6377rp3oeo4u03u8tq89m23hgtmb7gq.apps.googleusercontent.com',
    });
  }, []);

  async function onGoogleButtonPress() {
    try {
     

      const userInfo = await GoogleSignin.signIn();
      console.log('userinfo', userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log(error);
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log(error);
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log(error);
      } else {
        console.log(error);
      }
    }
  }

  const login = async () =>{
    try{
      let responselogin = await firebase.auth().signInWithEmailAndPassword(data.email,data.password)
      setdata({email:'',password:''})
      console.log(responselogin)
      await setItem(KeyLogin,responselogin)
     
      navigation.navigate(Screens.HOMESCREENS)

    }
    catch(e){
      console.log(e,'>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<')
    }
  }
  return (
    <ImageBackground source={Images.ImageBackground} style={styles.mainCons}>
      <StatusBar translucent backgroundColor="transparent" />
      <Text style={styles.headerText}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        autoCapitalize="none"
        keyboardType="email-address"
        value = {data.email}
        onChangeText={(text)=>setdata({...data,email:text})}
      />
      <TextInput style={styles.input}  value = {data.password} placeholder="Password"  onChangeText={(text)=>setdata({...data,password:text})} />

      <TouchableOpacity style={styles.loginButton} onPress={()=>login()}>
        <Text style={styles.buttonText}> Login</Text>
      </TouchableOpacity>
      <View style={styles.SocialBtn}>
        <TouchableOpacity style={styles.facebookButton}>
          {AppIcon('facebook', 25, 'white')}
          <Text style={styles.buttonText}>Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{...styles.facebookButton, ...styles.googleButton}}
          onPress={() => onGoogleButtonPress()}>
          {AppIcon('google', 25, 'white')}
          <Text style={styles.buttonText}> Google</Text>
        </TouchableOpacity>
      </View>
      <View style = {styles.BottomCreateAccount} >
        <TouchableOpacity onPress={()=>navigation.navigate(Screens.SIGNUP)}>
            <Text style = {styles.CreateAccount}>Create account</Text>
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
    marginTop:responsiveHeight(22)
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
  BottomCreateAccount:{
    flex:1,
    justifyContent:'flex-end',
    alignItems:'center',
    paddingBottom:50
  },
  CreateAccount:{
    fontSize:20,
    color:colors.lightgreen,
    fontWeight:'700'
  }
});
