import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors} from '../../Contants/Colors';
import {Images} from '../../assets/picture';
import Headers from '../../Common/Headers/Headers';
import TextInputCon from '../../Common/TextInputCon';
import {getResponseWithDATA} from '../../api/Api';
import {useSelector} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';
import Loader from '../../Common/Loader';
import { getApiResponseOnly, getApiResponseWithData } from '../../api/ApiHit/apiHit';

export default function Order({navigation}) {
  const userdata = useSelector(state => state);
  const foucs = useIsFocused();
  const [data, setdata] = useState([]);

  const getOrderd = async () => {
    try {
      let res = await getApiResponseOnly(
        `https://plants-backend-1.onrender.com/order/getByUserId/${userdata?.login?.data?.success?._id}`,
      );
      // console.log(res);
      setdata(res?.data?.data); // Uncomment if you need to use the response data
    } catch (e) {
      console.log('Error in order details:', e);
    }
  };

  useEffect(() => {
    getOrderd();
  }, [foucs]);

  const renderItem = ({item, index}) => {
 
    return (
      <Pressable style={styles.MainConItem} key={index} onPress={()=>navigation.navigate("ShowOrder",{data:item.cartId})}>
        <View style={styles.inMain}>
          <Image source={Images.Flower} style={{width: 80, height: '100%'}} />
          <View style={{flex: 1, paddingLeft: 12}}>
            <Text style={styles.DateText} numberOfLines={1}>
             Date: {new Date(item?.cartId?.dateModified).toLocaleDateString()}
            </Text>
            <Text style={styles.DateText} numberOfLines={1}>
             Address: {item?.deliveryAdress}
            </Text>
            <Text style={styles.DateText} numberOfLines={1}>
             Price: {item?.cartId?.total} <Text style={[styles.DateText,{textDecorationLine:'line-through'}]}>{item?.cartId?.totalmrp}</Text>
            </Text>
            <Text style={[styles.DateText,{color:colors.lightgreen}]} numberOfLines={1}>
             Order: {item?.status==2?'Ordered':'Cancel'}
            </Text>
          </View>
          <TouchableOpacity>
            <Image source={Images.rightArrow} style={{width: 15, height: 15}} />
          </TouchableOpacity>
        </View>
        {item.rating && (
          <>
            <View style={{flex: 0.2}} />
            <View style={styles.RatingCon}>
              <Text style={{color: colors.black, fontSize: 13}}>
                Rating & Star
              </Text>
              {[0, 1, 2, 3, 4].map(item => {
                return (
                  <Image source={Images.star} style={{width: 20, height: 20}} />
                );
              })}
            </View>
          </>
        )}
      </Pressable>
    );
  };
  return (
    <View style={styles.Main}>
      <Headers text={'Order Detail'} />
      <ScrollView style={{paddingHorizontal: 15}}>
        <TextInputCon text={'Search...'} search={true} />
        {data?.length > 0 ? (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => index}
          // contentContainerStyle={{paddingBottom: 25}}
        />
         ) : (
          <Loader Loading={true} />
        )} 
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  Main: {
    flex: 1,
    backgroundColor: 'white',
  },
  MainConItem: {
    backgroundColor: colors.white,
    elevation: 1,
    marginVertical: 10,
  },
  DateText: {
    color: colors.black,
    marginTop: 10,
    fontSize: 14,
  },
  inMain: {
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 0.9,
  },
  RatingCon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 2,
    backgroundColor: colors.grey,

    paddingHorizontal: 10,
    padding: 10,
    marginTop: 10,
  },
});
