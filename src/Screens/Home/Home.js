import {
  Alert,
  FlatList,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  PermissionsAndroid,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import Header from '../../Common/Headers/Header';
import Banner from './Banner';
import BottomNavigation from '../../Navigation/BottomNavigation/BottomNavigation';
import {colors} from '../../Contants/Colors';
import {DataofHomeScreen} from '../../Contants/Dummydata';
import Indoor from './Indoor';

import {LAYER1, PRODUCT, fetchData} from '../../Contants/apiUrl';
import PushNotification from 'react-native-push-notification';

import {Secret} from '../../Contants/Secrets';
import ShopItemScreen from '../ShopCategory';
import TopPlants from '../TopPlantsItems';
import ShopDelights from '../ShopDelights';
import SellingItems from '../SellingItems';
import {apiResponse} from '../../api/ApiHit/apiHit';
import messaging from '@react-native-firebase/messaging';
import Loader from '../../Common/Loader';
import {useDispatch, useSelector} from 'react-redux';
import {layer1Request} from '../../redux/reducers/lay1Reducers';
import {productRequest} from '../../redux/reducers/producReducers';
let increment = 1;
export default function Home() {
  const [data, setdata] = useState({
    indexofFlatlist: 0,
    alldata: [],
  });

  const [prouctData, setprouctData] = useState([]);
  const [layer1, setlayer1] = useState([]);
  const [loader, setloader] = useState(false);
  const lay = useSelector(state => state);
  console.log(lay.lay1.data.success.data, 'qwertyu');
  const dispatch = useDispatch();

  const notication = async () => {
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
    );
  };
  useEffect(() => {
    notication();
  }, []);
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
    });
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
      console.log(remoteMessage);
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
      console.log('permission');
    } catch (error) {
      // User has rejected permissions
      console.log('permission rejected');
    }
  }

  useEffect(() => {
    requestPermission();
  }, []);

  const messg = async () => {
    messaging().onMessage(async remoteMessage => {
      // Alert.alert('',remoteMessage)
      console.log('Message received!', remoteMessage);
      onDisplayNotification();
    });

    messaging().onNotification(async notification => {
      // Alert.alert('',notification)
      console.log('Notification received!', notification);
    });

    messaging().onNotificationOpened(notificationOpen => {
      // Alert.alert('',notificationOpen)
      console.log('Notification opened!', notificationOpen);
    });
  };
  useEffect(() => {
    messg();
  }, []);

  useEffect(() => {
    PushNotification.configure({
      // (optional) Called when Token is generated (iOS and Android)
      onRegister: function (token) {
        console.log('TOKEN:', token);
      },

      // (required) Called when a remote or local notification is opened or received
      onNotification: function (notification) {
        console.log('NOTIFICATION:', notification);

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
        sound: true,
      },
      popInitialNotification: true,
      requestPermissions: true,
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

  useEffect(() => {
    // fetchApi();
    setloader(true);
    dispatch(
      layer1Request({
        payload: LAYER1,
        scuess: res => {
          setlayer1(res.data);
          setloader(false);
        },
        onFail: error => {
          setloader(false);
        },
      }),
    );
  }, []);
  useEffect(() => {
    setloader(true);
    dispatch(
      productRequest({
        payload: PRODUCT,
        scuess: res => {
          setprouctData(res.data);
          setloader(false);
        },
        onFail: error => {
          console.log(error);
          setloader(false);
        },
      }),
    );
  }, []);

  return (
    <View style={styles.Main}>
      <Loader Loading={loader} />
      <Header />
      <StatusBar translucent={false} backgroundColor={colors.lightgreen} />
      <ScrollView contentContainerStyle={{paddingBottom: 20}}>
        <TopPlants />
        <Banner />
        <Text style={styles.ItemTypeText}>Shop by Delights</Text>
        <ShopDelights />
        <FlatList
          data={DataofHomeScreen}
          renderItem={ItemSelect}
          contentContainerStyle={styles.BtnConParent}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={key => key.id}
        />
        <Text style={styles.ItemTypeText}>Shop by Category</Text>
        <ShopItemScreen layer1={layer1} />
        <Text style={styles.ItemTypeText}>Bestsellers</Text>
        <SellingItems productData={prouctData} />
      </ScrollView>
      <BottomNavigation />
    </View>
  );
}
