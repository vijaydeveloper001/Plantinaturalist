import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
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
import { useFocusEffect, useNavigation } from '@react-navigation/native';





export default function Home() {
  const naivgation = useNavigation()
  const [data, setdata] = useState({
    indexofFlatlist: 0,
    alldata:[]
  });

  const fetchData = async () => {
    try {
      const collectionRef = firestore().collection('PostData');
      const snapshot = await collectionRef.get();
  
      const newData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
  
      setdata({...data,alldata:newData})
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // const addData = async () => {
  //   try {
  //     let data = await firestore().collection('IPlantAdd').doc().set({name:'rose'});
  //     console.log(data, 'sergfbvc');
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };
  
  // useEffect(() => {
  //   addData();
  // }, []);

 

  useFocusEffect(
    React.useCallback(()=>{
    fetchData()
  },[]))  
  // useEffect(()=>{
  //   fetchData()
  // },[])


  const ItemSelect = ({item, index}) => {
    return (
      <TouchableOpacity
        style={{
          ...styles.BtnCon,
          backgroundColor:
            index == data.indexofFlatlist ? colors.lightgreen : colors.white,
          marginLeft: index == 0 ? 0 : 20,
        }}
        onPress={() => setdata({indexofFlatlist: index})}>
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
  return (
    <View style={styles.Main}>
      <Header />
      <ScrollView contentContainerStyle={{paddingBottom: 20}}>
        <Banner />
        <FlatList
          data={DataofHomeScreen}
          renderItem={ItemSelect}
          contentContainerStyle={styles.BtnConParent}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
        <Indoor dataProps={data.alldata}  />
        <Text style={styles.RectenVieText}>Recent View</Text>
        <Indoor dataProps={data.alldata}  />
      </ScrollView>
      <BottomNavigation />
    </View>
  );
}
