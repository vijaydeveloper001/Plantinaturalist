import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import Header from '../../Common/Headers/Header';
import Banner from './Banner';
import BottomNavigation from '../../Navigation/BottomNavigation/BottomNavigation';
import {colors} from '../../Contants/Colors';
import {DataofHomeScreen} from '../../Contants/Dummydata';
import Indoor from './Indoor';
export default function Home() {
  const [data, setdata] = useState({
    indexofFlatlist: 0,
  });
  const ItemSelect = ({item, index}) => {
    return (
      <TouchableOpacity
        style={{
          ...styles.BtnCon,
          backgroundColor:
            index == data.indexofFlatlist ? colors.lightgreen : colors.white,
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
      <ScrollView contentContainerStyle = {{paddingBottom:20}}>
        <Banner />
        <FlatList
          data={DataofHomeScreen}
          renderItem={ItemSelect}
          contentContainerStyle={styles.BtnConParent}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
        <Indoor/>
        <Text style = {styles.RectenVieText}>Recent View</Text>
        <Indoor/>
      </ScrollView>
      <BottomNavigation />
    </View>
  );
}
