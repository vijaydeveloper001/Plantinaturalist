import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React from 'react';
import {colors} from '../../Contants/Colors';
import {Images} from '../../assets/picture';
import Headers from '../../Common/Headers/Headers';
import TextInputCon from '../../Common/TextInputCon';

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
  {
    order: 'Your order has been deliverd',
    rating: true,
    img: Images.Herbs,
  },
  {
    order: 'Your order has been canceled',
    rating: false,
    img: Images.nature,
  },
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
];

export default function Order() {
  const renderItem = ({item, index}) => {
    return (
      <Pressable style={styles.MainConItem} key={index}>
        <View style={styles.inMain}>
          <Image source={item.img} style={{width: 80, height: '100%'}} />
          <View style={{width: 200}}>
            <Text style={styles.DateText} numberOfLines={1}>
              20 / 07 / 2023
            </Text>
            <Text style={styles.DateText} numberOfLines={1}>
              {item.order}
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
      <TextInputCon text={'Search...'} search={true} />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index}
        contentContainerStyle={{paddingVertical: 25}}
      />
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
    // height:150,
    flex: 1,
    elevation: 10,
    marginTop: 4,
    paddingHorizontal: 20,
    marginHorizontal: 20,
    paddingVertical: 10,
  },
  DateText: {
    color: colors.black,
    marginTop: 10,
    fontSize: 16,
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
    elevation: 10,
    backgroundColor: colors.grey,

    paddingHorizontal: 10,
    padding: 10,
    marginTop: 10,
  },
});
