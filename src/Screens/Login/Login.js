import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors} from '../../Contants/Colors';
import TextInputCon from '../../Common/TextInputCon';
import {getResponseonly} from '../../api/Api';
import {useDispatch} from 'react-redux';
import {loginSuccess} from '../../redux/reducers/login';
import Loader from '../../Common/Loader';
import Button from '../../Common/Button';

export default function Login({navigation}) {
  const dispatch = useDispatch();
  const [loading, setloading] = useState(false);
  const [data, setdata] = useState('');
  const [input, setinput] = useState('');
  const loginapi = async () => {
    let response = await getResponseonly(
      'https://plants-backend-1.onrender.com/user',
    );
    console.log(response);
    if (response?.status == 200) {
      setloading(false);
      setdata(response?.data);
    }
    setloading(false);
  };
  useEffect(() => {
    setloading(true);
    loginapi();
  }, []);

  const checkLogin = async () => {
    setloading(true);
    if (input) {
      let filter = data?.filter(item =>
        item?.email?.toLowerCase()?.includes(input?.toLowerCase()),
      );

      if (filter?.length > 0) {
        setloading(false);
        setTimeout(() => {
          dispatch(loginSuccess(filter[0]));
        }, 3000);
        setinput('');
        setdata('');
      }
    }
    setloading(false);
  };

  return (
    <View style={styles.mainCons}>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
      <Loader Loading={loading} />
      <View style={{paddingHorizontal: 10}}>
        <Text style={styles.headerText}>
          Login with phone number or sign up
        </Text>
        <View style = {styles.inConCode}>
          <Text style={styles.textNUMBERcODE}>+91</Text>
          <TextInput
            placeholder="Continue with your number"
            // keyboardType="numeric"
            onChangeText={text => setinput(text)}
            style = {styles.con}
            placeholderTextColor={'#dae9f2'}
            
          />
        </View>
        <Button
          style={{marginHorizontal: 0, marginTop: 20}}
          TextName="Continue"
          press = {()=>checkLogin()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainCons: {
    flex: 1,
    backgroundColor: '#fff',
    // justifyContent: 'center',
    // alignItems:'center'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: '500',
    // marginBottom: 20,
    color: colors.lightgreen,
    textAlign: 'left',
    marginTop:50
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
  textNUMBERcODE: {
    color: colors.black,
     fontSize:15,
    fontWeight:'600'
  },
  inConCode:{
    borderRadius: 5,
    backgroundColor: colors.white,
    elevation: 1,
    paddingHorizontal: 10,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  con:{
    flex:1,
    // marginTop:-10,
    color:'#dae9f2',
    paddingHorizontal:20,
    fontSize:15,
    fontWeight:'600'
  
  }
});
