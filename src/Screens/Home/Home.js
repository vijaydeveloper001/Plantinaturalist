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
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {fetchData} from '../../Contants/apiUrl';
import {
  LazyloadScrollView,
  LazyloadView,
  LazyloadImage
} from 'react-native-lazyload';
export default function Home() {
  const naivgation = useNavigation();
  const [data, setdata] = useState({
    indexofFlatlist: 0,
    alldata: [],
  });

  

  const fetchdata = async () => {
    let apiData = await fetchData();
   
    setdata({...data, alldata: apiData});
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchdata();
    }, []),
  );

  const ItemSelect = ({item, index}) => {
    return (
      <TouchableOpacity
        style={{
          ...styles.BtnCon,
          backgroundColor:
            index == data.indexofFlatlist ? colors.lightgreen : colors.white,
          marginLeft: index == 0 ? 0 : 20,
        }}
        onPress={() => setdata({...data,indexofFlatlist: index})}>
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
  console.log(data.alldata);
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
        <Indoor dataProps={data.alldata} />
        <Text style={styles.RectenVieText}>Recent View</Text>
        <Indoor dataProps={data.alldata}  />
      </ScrollView>
      <BottomNavigation />
    </View>
  );
}
