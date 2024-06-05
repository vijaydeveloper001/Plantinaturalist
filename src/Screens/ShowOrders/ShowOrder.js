import {FlatList, Pressable, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Images} from '../../assets/picture';
import {colors} from '../../Contants/Colors';
import Headers from '../../Common/Headers/Headers';
import {ViewCon} from '../Cart/Cart';

export default function ShowOrder({route}) {
  const {data} = route?.params;
  console.log(data);
  const renderItem = ({item, index}) => {
    return (
      <Pressable style={styles.MainConItem} key={index}>
        <View style={styles.inMain}>
          <Image source={Images.Flower} style={{width: 80, height: '100%'}} />
          <View style={styles.itemName}>
            <Text style={styles.DateText} numberOfLines={1}>
              Name: {item?.name}
            </Text>
            <Text style={styles.DateText} numberOfLines={1}>
              SellPrice: {item?.sellPrice}
            </Text>
            <Text style={styles.DateText} numberOfLines={1}>
              Quantity: {item?.quan}
            </Text>
            <Text style={styles.DateText} numberOfLines={1}>
              MRP: {item?.mrp}
            </Text>
          </View>
        </View>
      </Pressable>
    );
  };
  return (
    <View style={{flex: 1}}>
      <Headers text={'Show Order Items'} />
      <FlatList
        data={data?.products}
        renderItem={renderItem}
        keyExtractor={(item, index) => index}
        contentContainerStyle={{marginHorizontal: 20}}
        ListFooterComponent={() => {
          return (
            <>
              <View style={styles.deliveryedCon}>
                <Image
                  source={Images.close}
                  style={{width: 10, height: 10, margin: 10}}
                  tintColor={'#fff'}
                />

                <View style={styles.textorderd}>
                  <Text style={styles.deliveryText}>
                    {data?.status == 2 ? 'Delivered' : 'Canceled'}
                  </Text>
                  <Text style={styles.deliveryText}>
                    {data?.status == 2
                      ? 'On Tue,20 May'
                      : 'on Wed,8 May as per your request'}
                  </Text>
                </View>
              </View>
              {/* <View style={styles.total}>
                <View style={styles.inCon}>
                  <Text style={[styles.DateText]}>Total Mrp</Text>
                  <Text style={[styles.DateText]}>Total Price</Text>
                </View>
                <View style={styles.inCon}>
                  <Text style={[styles.DateText]}>{data?.totalmrp}</Text>
                  <Text style={[styles.DateText]}>{data?.total}</Text>
                </View>
              </View> */}
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
                <ViewCon text={'Total MRP'} price={data.totalmrp} />
                <ViewCon
                  text={'Discount on MRP'}
                  price={data.totalmrp - data.total}
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
                  <Text style={[styles.footerStyle]}>रु {data.total}</Text>
                </View>
              </View>
            </>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  MainConItem: {
    backgroundColor: colors.white,
    elevation: 1,
    marginVertical: 10,
    height: 90,
  },
  DateText: {
    color: colors.black,
    fontSize: 14,
  },
  inMain: {
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 90,
  },
  total: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 5,
    padding: 10,
    height: 90,
    marginTop: 15,
  },
  itemName: {
    flex: 1,
    paddingLeft: 12,
    justifyContent: 'space-around',
    height: 90,
  },
  inCon: {
    justifyContent: 'space-around',
    height: 80,
  },
  deliveryedCon: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 10,
    backgroundColor: colors.lightgreen,
    height: 70,
    borderRadius: 5,
  },
  deliveryText: {
    color: colors.white,
    fontSize: 15,
  },
  btncON: {
    backgroundColor: '#1111',
    padding: 10,
    borderRadius: 9999,
  },
  textorderd: {
    flex: 1,
    paddingLeft: 10,
    height: '100%',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  columnwraper: {
    backgroundColor: colors.white,
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
});
