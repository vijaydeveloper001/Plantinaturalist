import {
  FlatList,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import Header from '../../Common/Headers/Header';
import Banner from './Banner';
import {colors} from '../../Contants/Colors';
import {DataofHomeScreen} from '../../Contants/Dummydata';
import {LAYER1, PRODUCT} from '../../Contants/apiUrl';
import ShopItemScreen from '../ShopCategory/ShopItemScreen';
import TopPlants from '../TopPlantsItems/TopPlants';
import SellingItems from '../SellingItems/ShopItemScreen';
import {useDispatch} from 'react-redux';
import {layer1Request} from '../../redux/reducers/lay1Reducers';
import {productRequest} from '../../redux/reducers/producReducers';
import TextInputCon from '../../Common/TextInputCon';
import ItemSelectby from '../ItemSelect/ItemSelectby';
import Shimmer from '../../Common/Shimmer';
import {useNavigation} from '@react-navigation/native';
import {Screens} from '../../Contants/NaivgationName';
export default function Home() {
  const [data, setdata] = useState({
    indexofFlatlist: 0,
    alldata: [],
  });
  const [prouctData, setprouctData] = useState([]);
  const [layer1, setlayer1] = useState([]);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const ItemSelect = ({item, index}) => {
    return (
      <TouchableOpacity
        style={{
          ...styles.BtnCon,
          marginRight: index == DataofHomeScreen.length - 1 ? 0 : 40,
        }}
        onPress={() => setdata({...data, indexofFlatlist: index})}>
        <Text
          style={{
            ...styles.itemText,
            color: index == data.indexofFlatlist ? colors.lightgreen3 : 'grey',
          }}>
          {item?.type}
        </Text>
      </TouchableOpacity>
    );
  };

  useEffect(() => {
    dispatch(
      layer1Request({
        payload: LAYER1,
        scuess: res => {
          setlayer1(res.data);
        },
        onFail: error => {
          console.log(error, 'home page error');
        },
      }),
    );
  }, []);
  useEffect(() => {
    dispatch(
      productRequest({
        payload: PRODUCT,
        scuess: res => {
          setprouctData(res.data);
        },
        onFail: error => {
          console.log(error);
        },
      }),
    );
  }, []);

  return (
    <View style={styles.Main}>
      <StatusBar backgroundColor={colors.lightgreen} />
      <ScrollView contentContainerStyle={{paddingBottom: 20}}>
        <SafeAreaView>
          <Header />
          <TextInputCon
            text={'SEARCH ITEM.........'}
            margin={1}
            search={true}
            edit={true}
            press={() => navigation.navigate(Screens.SEARCH)}
          />
          <TopPlants />
          <Banner />
          <FlatList
            data={DataofHomeScreen}
            renderItem={ItemSelect}
            contentContainerStyle={styles.BtnConParent}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index}
          />
          <ItemSelectby />
          <Text style={styles.ItemTypeText}>Shop by Category</Text>
          {layer1.length <= 0 ? (
            <Shimmer />
          ) : (
            <ShopItemScreen layer1={layer1} />
          )}
          <Text style={styles.ItemTypeText}>Bestsellers</Text>
          {prouctData.length <= 0 ? (
            <Shimmer />
          ) : (
            <SellingItems productData={prouctData} />
          )}
        </SafeAreaView>
      </ScrollView>
    </View>
  );
}
