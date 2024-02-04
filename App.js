/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
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
import { NavigationContainer } from '@react-navigation/native';
import AppNavgigation from './src/Navigation/AppNavigation/AppNavgigation';
import {initializeApp,getApps} from 'firebase/app'
import { Secret } from './src/Contants/Secrets';
import firebase from '@react-native-firebase/app';
import { Provider } from 'react-redux'
import  store  from './src/redux/store/store';
function App(){
  const firebaseConfig = {
    apiKey: Secret.apiKey,
    authDomain:Secret.authDomain,
    databaseURL: Secret.databaseURL,
    projectId: Secret.projectId,
    storageBucket: Secret.storageBucket,
    messagingSenderId: Secret.messagingSenderId,
    appId: Secret.appId,
  };

  useEffect(()=>{
  
  //  if (!Firebase.app.)
  if (!getApps().length){
    console.log('Firebase app already exits',getApps())
  
  }else  firebase.initializeApp(firebaseConfig)
  },[])

  return (
    <NavigationContainer>
      <Provider store={store}>
      <AppNavgigation/>
      </Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;
