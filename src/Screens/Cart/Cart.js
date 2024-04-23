import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {Images} from '../../assets/picture';
import {colors} from '../../Contants/Colors';
import Headers from '../../Common/Headers/Headers';
import Button from '../../Common/Button';
import {useNavigation} from '@react-navigation/native';
import {Screens} from '../../Contants/NaivgationName';
import LinearGradient from 'react-native-linear-gradient';
import ModalItem from '../../Common/ModalItem';
import { LocalDB } from '../../Contants/LocalDB';
const data = [
  {
    order: 'Your order has been deliverd',
    rating: true,
    img: Images.Flower,
  },
  {
    order: 'Your order has been canceled',
    rating: false,
    img: Images.Herbs,
  },
  {
    order: 'Your order has been deliverd',
    rating: true,
    img: Images.Indoor,
  },
  {
    order: 'Your order has been canceled',
    rating: false,
    img: Images.Vegitable,
  },
];

const ViewCon = ({text, price, know, color, platfrom}) => {
  return (
    <View style={styles.PriceCon}>
      <Text style={styles.Price}>
        {text} {know && <Text style={styles.PriceKnowMore}> Know more</Text>}
      </Text>
      <Text style={{...styles.Price, color: color ? color : colors.black}}>
        {platfrom ? 'Free' : 'रु ' + price}
      </Text>
    </View>
  );
};

export default function Cart() {
  const navigation = useNavigation();
  const [modal, setmodal] = useState(false);
  const {localClear} = LocalDB()
  const renderitem = ({item}) => {
    return (
      <View style={styles.MainRender}>
        <Image source={item.img} style={{width: '20%', height: '80%'}} />
        <View style={styles.TextCon}>
          <Text
            style={{color: colors.lightgreen, fontSize: 18, fontWeight: '600'}}>
            रु 832{' '}
            <Text
              style={{
                textDecorationLine: 'line-through',
                color: colors.lightgreen2,
              }}>
              {' '}
              रु 1000
            </Text>
          </Text>
          <Text style={{color: colors.black, fontSize: 12}} numberOfLines={1}>
            Flower item
          </Text>
          <Text style={{color: colors.black, fontSize: 8}}>6 Item</Text>
        </View>
        <View
          style={{
            height: '100%',
            justifyContent: 'space-between',
            paddingVertical: 8,
          }}>
          <TouchableOpacity
            onPress={() => setmodal(true)}
            style={{alignSelf: 'flex-end', paddingVertical: 10}}>
            <Image source={Images.close} style={{width: 15, height: 15}} />
          </TouchableOpacity>
          <View style={styles.ProductIncres}>
            <TouchableOpacity style={styles.btn}>
              <Text
                style={{
                  fontSize: 20,
                  textAlign: 'center',
                  color: colors.white,
                }}>
                -
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 15,
                  color: colors.black,
                  paddingHorizontal: 10,
                }}>
                1
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
              <Text
                style={{
                  fontSize: 20,
                  textAlign: 'center',
                  color: colors.white,
                }}>
                +
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <Headers text={'Cart'} />
      <ScrollView>
        <View
          style={{
            ...styles.columnwraper,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View>
            <Text style={styles.Price}>
              Delivery to,{' '}
              <Text style={{fontWeight: '600'}} numberOfLines={1}>
                152116
              </Text>
            </Text>
            <Text style={styles.Price} numberOfLines={1}>
              Mohali,Chandigarh
            </Text>
          </View>
          <TouchableOpacity
            style={styles.changeAddress}
            onPress={() => navigation.navigate(Screens.SHIPING)}>
            <Text style={{color: colors.lightgreen3}}>Change</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={data}
          renderItem={renderitem}
          keyExtractor={(item, index) => index}
          contentContainerStyle={{paddingBottom: 20}}
        />
        <View style={styles.columnwraper}>
          <View style={styles.ForYouCoupon}>
            <Text style={{...styles.Price, fontWeight: '600'}}>
              Best Coupon For You
            </Text>
            <Text
              style={{
                ...styles.Price,
                fontWeight: '600',
                color: colors.lightgreen,
              }}>
              All Counpons{' '}
            </Text>
          </View>
          <Text style={styles.Price}>Extra 204 OFF</Text>
          <Text style={styles.Price}>
            15% off on minimum purchase of Rs.999
          </Text>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#A2D240', '#166D3B']}
            style={{
              ...styles.changeAddress,
              alignSelf: 'flex-end',
              marginTop: 10,
            }}
            onTouchStart={() => navigation.navigate(Screens.COUPONS)}>
            <Text style={{color: colors.white}}>APPLY COUPON</Text>
          </LinearGradient>
        </View>

        <View style={styles.columnwraper}>
          <Text
            style={{
              ...styles.footerStyle,
              textAlign: 'left',
              paddingTop: 0,
              paddingBottom: 10,
            }}>
            PRICE DETAILS (2 items){' '}
          </Text>
          <ViewCon text={'Total MRP'} price={200} />
          <ViewCon
            text={'Discount on MRP'}
            price={200}
            know={true}
            color={colors.lightgreen}
          />
          <ViewCon
            text={'Coupon Discount'}
            price={200}
            know={true}
            color={colors.lightgreen}
          />
          <ViewCon text={'Platform Fe'} price={200} platfrom={true} />
          <ViewCon
            text={'Shipping Fee'}
            price={200}
            platfrom={true}
            color={colors.lightgreen}
          />
          <ViewCon text={'Plant Credit'} price={200} />
          <View style={styles.PriceCon}>
            <Text style={[styles.footerStyle]}>TOTAL AMOUNT</Text>
            <Text style={[styles.footerStyle]}>रु 832</Text>
          </View>
        </View>
        <ModalItem
          value={modal}
          onyes={() => setmodal(false)}
          oncancel={() => setmodal(false)}
        />
      </ScrollView>
      <Button
        TextName="PLACE ORDER"
        stle={25}
        press={() => localClear()}
        padding={20}
        height={50}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  MainRender: {
    height: 100,
    backgroundColor: colors.white,
    elevation: 10,
    marginHorizontal: 20,
    marginVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  TextCon: {
    width: '50%',
    height: '100%',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  ProductIncres: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btn: {
    backgroundColor: colors.lightgreen,
    borderRadius: 2,
    width: 25,
  },
  columnwraper: {
    backgroundColor: colors.white,
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 5,
    padding: 20,
    elevation: 5,
    marginVertical: 20,
  },
  PriceCon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 5,
  },
  footerStyle: {
    color: colors.lightgreen,
    paddingTop: 10,
    textAlign: 'right',
    fontSize: 15,
  },
  Price: {color: 'black', fontSize: 13},
  PriceKnowMore: {
    color: '#fc0377',
    fontWeight: '500',
    fontSize: 15,
  },
  changeAddress: {
    // backgroundColor: colors.lightgreen,
    borderRadius: 10,
    justifyContent: 'center',
    padding: 10,
  },
  ForYouCoupon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
});
