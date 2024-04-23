import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';

const KeyLogin = 'KeyLogin';

export function LocalDB() {
  const setItem = async (key, data) => {
    try {
      let storedData = await AsyncStorage.setItem(key, JSON.stringify(data));
      console.log(storedData, 'stored data');
    } catch (e) {
      console.log(e, 'not store data');
    }
  };

  const getItem = async key => {
    try {
      let data = await AsyncStorage.getItem(key);
      return data;
    } catch (e) {
      console.log(e, 'not get data ');
    }
  };

  const LocalDBRemove = async key => {
    try {
      let data = await AsyncStorage.removeItem(key);

      return data;
    } catch (e) {
      console.log(e, 'not get data ');
    }
  };
  const localClear = async () => {
    console.log('clear');
    try {
      let data = await AsyncStorage.clear();
      console.log(data);
    } catch (e) {
      console.log(e, 'not get data ');
    }
  };



  return {
    setItem,
    getItem,
    localClear,
  };
}
