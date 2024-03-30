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
import BottomNavigation from '../../Navigation/BottomNavigation/BottomNavigation';
import {colors} from '../../Contants/Colors';
import {DataofHomeScreen} from '../../Contants/Dummydata';
import {LAYER1, PRODUCT} from '../../Contants/apiUrl';
import ShopItemScreen from '../ShopCategory';
import TopPlants from '../TopPlantsItems';
import ShopDelights from '../ShopDelights';
import SellingItems from '../SellingItems';
import Loader from '../../Common/Loader';
import {useDispatch} from 'react-redux';
import {layer1Request} from '../../redux/reducers/lay1Reducers';
import {productRequest} from '../../redux/reducers/producReducers';
import TextInputCon from '../../Common/TextInputCon';
import ItemSelectby from '../ItemSelect/ItemSelectby';
import Shimmer from '../../Common/Shimmer';
export default function Home() {
  const [data, setdata] = useState({
    indexofFlatlist: 0,
    alldata: [],
  });
  const [prouctData, setprouctData] = useState([]);
  const [layer1, setlayer1] = useState([]);
  const [loader, setloader] = useState(false);
  const dispatch = useDispatch();
  const ItemSelect = ({item, index}) => {
    return (
      <TouchableOpacity
        style={{
          ...styles.BtnCon,
          // backgroundColor:
          //   index == data.indexofFlatlist ? colors.lightgreen : colors.white,
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
    // setloader(true);
    dispatch(
      layer1Request({
        payload: LAYER1,
        scuess: res => {
          setlayer1(res.data);
          // setloader(false);
        },
        onFail: error => {
          // setloader(false);
        },
      }),
    );
  }, []);
  useEffect(() => {
    // setloader(true);
    dispatch(
      productRequest({
        payload: PRODUCT,
        scuess: res => {
          setprouctData(res.data);
          // setloader(false);
        },
        onFail: error => {
          console.log(error);
          // setloader(false);
        },
      }),
    );
  }, []);

  return (
    <View style={styles.Main}>
      {/* <Loader Loading={loader} /> */}
      <StatusBar backgroundColor={colors.lightgreen} />
      <ScrollView contentContainerStyle={{paddingBottom: 20}}>
        <SafeAreaView>
          <Header />
         
          <TextInputCon
            text={'SEARCH ITEM.........'}
            margin={1}
            search={true}
          />

          <TopPlants />
          <Banner />
          {/* <Text style={styles.ItemTypeText}>Shop by Delights</Text>
          <ShopDelights /> */}
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
          {layer1.length<=0?<Shimmer/>:<ShopItemScreen layer1={layer1} />}
          <Text style={styles.ItemTypeText}>Bestsellers</Text>
          {prouctData.length<=0?<Shimmer/>:<SellingItems productData={prouctData} />}
        </SafeAreaView>
      </ScrollView>
      <BottomNavigation />
    </View>
  );
}
