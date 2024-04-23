/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect,useRef,useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import AppNavgigation from './src/Navigation/AppNavigation/AppNavgigation';
import {initializeApp, getApps} from 'firebase/app';
import {Secret} from './src/Contants/Secrets';
import firebase from '@react-native-firebase/app';
import {Provider} from 'react-redux';
import store from './src/redux/store/store';
import AuthNavigation from './src/Navigation/AuthNavigation/AuthNavigation';
import { getItem } from './src/Contants/LocalDB';
 function App() {
   const [userdata, setuserdata] = useState('')
   const ref = useRef(null);
  const getdata = async()=>{
    let userdata =await getItem('login');
    // ref?.current?.navigate("HomeScreens")
    console.log(ref?.current)
    setuserdata(JSON.parse(userdata))
    console.log(JSON.parse(userdata),'heeey')
  }
  useEffect(()=>{
    getdata()
  },[])
  // const firebaseConfig = {
  //   apiKey: Secret.apiKey,
  //   authDomain: Secret.authDomain,
  //   databaseURL: Secret.databaseURL,
  //   projectId: Secret.projectId,
  //   storageBucket: Secret.storageBucket,
  //   messagingSenderId: Secret.messagingSenderId,
  //   appId: Secret.appId,
  // };

  // useEffect(() => {
  //   //  if (!Firebase.app.)
  //   if (!getApps().length) {
  //     console.log('Firebase app already exits', getApps());
  //   } else firebase.initializeApp(firebaseConfig);
  // }, []);

  return (
    <NavigationContainer ref={ref}>
      <Provider store={store}>
       {userdata?<AppNavgigation />:<AuthNavigation/>}
      </Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;
