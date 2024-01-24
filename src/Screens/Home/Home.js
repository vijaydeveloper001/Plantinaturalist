import {
  Alert,
  FlatList,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  PermissionsAndroid
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import Header from '../../Common/Headers/Header';
import Banner from './Banner';
import BottomNavigation from '../../Navigation/BottomNavigation/BottomNavigation';
import {colors} from '../../Contants/Colors';
import {DataofHomeScreen} from '../../Contants/Dummydata';
import Indoor from './Indoor';
import firestore from '@react-native-firebase/firestore';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {LAYER1, fetchData} from '../../Contants/apiUrl';
import PushNotification from 'react-native-push-notification';
import {
  LazyloadScrollView,
  LazyloadView,
  LazyloadImage,
} from 'react-native-lazyload';
import {Secret} from '../../Contants/Secrets';
import ShopItemScreen from '../ShopCategory';
import TopPlants from '../TopPlantsItems';
import ShopDelights from '../ShopDelights';
import SellingItems from '../SellingItems';
import { apiResponse } from '../../api/ApiHit/apiHit';
import messaging from '@react-native-firebase/messaging';
import { getResponse } from '../../api/Api';
import Loader from '../../Common/Loader';
let increment = 1
export default function Home() {
  const naivgation = useNavigation();
  const [data, setdata] = useState({
    indexofFlatlist: 0,
    alldata: [],
    layer1:[],
    loader:false
  });

  const notication = async () =>{
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
  }
  useEffect(()=>{
    notication()
},[])

  const fetchdata = async () => {
    // let apiData = await fetchData();
    console.log('sddf')
    let response = await  apiResponse(increment);
  
    console.log('response')
    console.log(response)
    setdata({...data,alldata:JSON.parse(response)})

    // setdata({...data, alldata: apiData});
  };
  

  // useFocusEffect(
  //   React.useCallback(() => {
  //     fetchdata()
  //   }, [increment]),
  // );
  // useEffect(()=>{
  //   PushNotification.createChannel(
  //     {
  //      channelId: "Plant",
  //      channelName: "Vijaykumar",
  //      channelDescription: "Hello",
  //      playSound: true,
  //      importance: "High",
  //      vibrate: true,
  //     },
  //     () => null
  //    );
  // },[])
  useEffect(() => {
    messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
    })
    const unsubscribe = messaging().onMessage(async remoteMessage => {
     Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    console.log(remoteMessage)
    });
    return unsubscribe;
    }, []);

    


    async function requestPermission() {
      try {
          await firebase.messaging().requestPermission();
          // User has authorised
          if (!firebase.messaging().isRegisteredForRemoteNotifications) {
            await firebase.messaging().registerForRemoteNotifications();
          }
        console.log('permission')
      } catch (error) {
          // User has rejected permissions
          console.log('permission rejected');
      }
    }


    useEffect(()=>{
      requestPermission()
    },[])

 

  const messg = async () =>{
    messaging().onMessage(async remoteMessage => {
      // Alert.alert('',remoteMessage)
      console.log('Message received!', remoteMessage);
      onDisplayNotification()
    
    });
    
    messaging().onNotification( async notification => {
      // Alert.alert('',notification)
      console.log('Notification received!', notification);
    });
    
    messaging().onNotificationOpened(notificationOpen => {
      // Alert.alert('',notificationOpen)
      console.log('Notification opened!', notificationOpen);
    });
  }
  useEffect(()=>{
   
    messg()
  },[])


  useEffect(() => {
    PushNotification.configure({
      // (optional) Called when Token is generated (iOS and Android)
      onRegister: function(token) {
        console.log("TOKEN:", token);
      },
    
      // (required) Called when a remote or local notification is opened or received
      onNotification: function(notification) {
        console.log("NOTIFICATION:", notification);
    
        // process the notification here
    
        // required on iOS only 
        notification.finish(PushNotificationIOS.FetchResult.NoData);
      },
      // Android only
      senderID: Secret.senderID,
      // iOS only
      permissions: {
        alert: true,
        badge: true,
        sound: true
      },
      popInitialNotification: true,
      requestPermissions: true
    });
  }, []);

  const ItemSelect = ({item, index}) => {
    return (
      <TouchableOpacity
      key={index}
        style={{
          ...styles.BtnCon,
          backgroundColor:
            index == data.indexofFlatlist ? colors.lightgreen : colors.white,
          marginLeft: index == 0 ? 0 : 20,
        }}
        onPress={() => setdata({...data, indexofFlatlist: index})}>
        <Text
          style={{
            ...styles.itemText,
            color:
              index == data.indexofFlatlist ? colors.white : colors.lightgreen,
          }}>
          {item?.type}
        </Text>
      </TouchableOpacity>
    );
  };

  const apiLayer1 = async () =>{
    setdata({...data,loader:true})
    let data =await getResponse(LAYER1);
    if (data.status == 200){
      setdata({...data,loader:false})
      setdata({...data,layer1:data.data})
    }else{
      setdata({...data,loader:false})
    }
  }

  useEffect(()=>{
    apiLayer1()
  },[])
  return (
    <View style={styles.Main}>
      <Loader Loading = {data.loader}/>
      <Header  />
      <StatusBar translucent={false} backgroundColor={colors.lightgreen} />
      <ScrollView contentContainerStyle={{paddingBottom: 20}}   >
        <TopPlants />

        <Banner />
        <Text style={styles.ItemTypeText}>Shop by Delights</Text>
        {/* <ShopDelights /> */}
        <FlatList
          data={DataofHomeScreen}
          renderItem={ItemSelect}
          contentContainerStyle={styles.BtnConParent}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
        <Text style={styles.ItemTypeText}>Shop by Category</Text>
        <ShopItemScreen layer1 = {data.layer1}/>
        <Text style={styles.ItemTypeText}>Bestsellers</Text>
        <SellingItems />
      </ScrollView>
      <BottomNavigation />
    </View>
  );
}
