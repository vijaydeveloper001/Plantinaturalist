import React,{useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {colors} from '../../Contants/Colors';
import FastImage from 'react-native-fast-image';
import {Images} from '../../assets/picture';
import DetailPageText from '../../Common/Headers/DetailPageText';
import Button from '../../Common/Button';
import TextFile from '../../Common/TextFile';
export default function DetailPlants(props) {
  const [IncrePlant, setIncrePlant] = useState(1)
  console.log(props.route?.params?.data, 'asfasf');
  return (
    <View style={styles.Main}>
      <ScrollView contentContainerStyle={{paddingBottom: 20}}>
        <FastImage source={Images.Herbs} style={styles.ImageCons} />
        <Text style={styles.TextStyle}>
          {props.route?.params?.data.name
            ? props.route?.params?.data.name
            : 'Flower'}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 20,
          }}>
          <Text style={{...styles.discountPrice, fontSize: 30}}>रु 200</Text>
          <Text
            style={{
              ...styles.discountPrice,
              fontSize: 18,
              textDecorationLine: 'line-through',
            }}>
            600
          </Text>
          <Text
            style={{...styles.discountPrice, fontSize: 18, color: colors.red}}>
            (40% off)
          </Text>
        </View>
        <DetailPageText text={'Keep In Indirect Sunlight'} />
        <DetailPageText text={'Water Twice Per Week'} />
        <DetailPageText text={'Not Child Friendly'} />
        <DetailPageText text={'Puriflies Air'} />
        <DetailPageText text={'Comes With Self-Watering Pot'} />
        <TextFile
          text={'Select Planter: Poetic'}
          styles={{
            color: colors.black,
            fontWeight: '600',
            marginTop: 20,
            marginHorizontal: 20,
          }}
        />
        <View style={styles.WaterParCon}>
          <TouchableOpacity style={styles.WaterCon}>
            <Image source={Images.Flower} style={styles.ImageStyle} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.WaterCon}>
            <Image source={Images.Flower} style={styles.ImageStyle} />
          </TouchableOpacity>
        </View>
        <TextFile
          text={'Select Color: White'}
          styles={{
            color: colors.black,
            fontWeight: '600',
            marginTop: 20,
            marginHorizontal: 20,
          }}
        />
        <View style={styles.WaterParCon}>
          {['red', 'white', 'blue', 'green', 'yellow', 'black', 'orange'].map(
            item => {
              return (
                <TouchableOpacity style={styles.ColorCon}>
                  <View
                    style={{
                      width: '100%',
                      height: '100%',
                      backgroundColor: item,
                      borderRadius: 30,
                    }}
                  />
                </TouchableOpacity>
              );
            },
          )}
        </View>
        <View style={styles.IncreCon}>
          <Text onPress={()=>IncrePlant>=1?setIncrePlant(IncrePlant-1):''} style={styles.IncreText}>-</Text>
          <Text style={styles.IncreText}>{IncrePlant}</Text>
          <Text onPress={()=>setIncrePlant(IncrePlant+1)} style={styles.IncreText}>+</Text>
        </View>
      </ScrollView>
      <View style={styles.OrderConParent}>
        <Button TextName={'Add to cart'} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Main: {
    flex: 1,
  },
  ImageCons: {
    height: 400,
    marginHorizontal: 20,
    marginTop: 20,
  },
  TextStyle: {
    color: colors.black,
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'left',
    marginTop: 20,
    marginHorizontal: 20,
  },
  OrderCon: {
    backgroundColor: colors.lightgreen,
    marginHorizontal: 20,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  PlaceOrderText: {
    fontSize: 20,
    color: colors.white,
    fontWeight: '600',
  },
  OrderConParent: {
    paddingBottom: 30,
  },
  discription: {
    textAlign: 'center',
    marginHorizontal: 20,
    color: colors.gray,
    marginTop: 10,
  },
  discountPrice: {
    fontSize: 17,
    fontWeight: '600',
    color: colors.black,
    marginRight: 10,
    marginTop: 20,
  },
  WaterCon: {
    width: 50,
    height: 50,
    borderRadius: 1,
    borderColor: colors.black,
    borderWidth: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    padding: 10,
  },
  WaterParCon: {
    flexDirection: 'row',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  ImageStyle: {
    width: '100%',
    height: '100%',
  },
  ColorCon: {
    width: 20,
    height: 20,
    borderColor: colors.gray,
    borderWidth: 0.2,
    borderRadius: 30,
    marginRight: 5,
    padding: 3,
  },
  IncreCon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 100,
    marginHorizontal: 20,
    marginTop: 20,
    borderColor: colors.black,
    borderWidth: 0.2,
    borderRadius: 2,
    padding: 5,
  },
  IncreText: {
    color: 'black',
    fontSize: 20,
    fontWeight: '600',
  },
});
