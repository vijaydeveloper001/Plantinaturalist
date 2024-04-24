import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors} from '../../Contants/Colors';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';
import {Screens} from '../../Contants/NaivgationName';
import TextInputCon from '../../Common/TextInputCon';
import {getResponseonly} from '../../api/Api';
import {LocalDB} from '../../Contants/LocalDB';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../redux/reducers/login';
;
export default function Login() {
  const dispatch = useDispatch()
  const {setItem}  = LocalDB()
  const [data, setdata] = useState('');
  const navigation = useNavigation();
  const [input, setinput] = useState('')
  const loginapi = async () => {
    let response = await getResponseonly(
      'https://plants-backend-1.onrender.com/user',
    );
    console.log(response)
    if (response?.status == 200) {
      setdata(response?.data);
    }
  };
  useEffect(() => {
    loginapi(); 
  }, []);

  const checkLogin = async () => {
    let filter = data?.filter(item =>
      item?.email?.toLowerCase()?.includes(input?.toLowerCase()),
    );
    if (filter?.length > 0) {
      dispatch(loginSuccess(filter[0]))
    //  await setItem('login',JSON.stringify(filter[0]))
    }
  };

  return (
    <View style={styles.mainCons} >
      <StatusBar translucent backgroundColor="transparent" />
      <Text style={styles.headerText}>Login</Text>
      <TextInputCon text="Email" onChangeText={text => setinput(text)} />
      <TouchableOpacity style={styles.loginButton} onPress={() => checkLogin()}>
        <Text style={styles.buttonText}> Login</Text>
      </TouchableOpacity>
    </View>
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
  BottomCreateAccount: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 50,
  },
  CreateAccount: {
    fontSize: 20,
    color: colors.lightgreen,
    fontWeight: '700',
  },
});
