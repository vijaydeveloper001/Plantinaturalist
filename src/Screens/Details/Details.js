import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Pressable,
  FlatList,
  TextInput,
  Alert,
} from 'react-native';
import {colors} from '../../Contants/Colors';
import {Images} from '../../assets/picture';
import Button from '../../Common/Button';
import TextFile from '../../Common/TextFile';
import Headers from '../../Common/Headers/Headers';
import DetailPageText from '../../Common/Headers/DetailPageText';
import {getResponsePost} from '../../api/Api';
import {useSelector} from 'react-redux';
import Loader from '../../Common/Loader';
import TypoGraphy from '../../Common/Typography';
import FastImage from 'react-native-fast-image';

const RenderImageWithText = ({image, text}) => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Image source={image} style={{width: 30, height: 30}} />
      <TypoGraphy style={{color: '#000', fontSize: 14}}>{text}</TypoGraphy>
    </View>
  );
};

const DotWithText = ({text}) => {
  return (
    <View
      style={{
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: 40,
        paddingTop: 20,
      }}>
      <View
        style={{
          width: 5,
          height: 5,
          borderRadius: 999,
          backgroundColor: '#000',
        }}
      />
      <TypoGraphy style={{color: '#000', fontSize: 14, paddingHorizontal: 10}}>
        hELLLO
      </TypoGraphy>
    </View>
  );
};

export default function DetailPlants(props) {
 
  let color = [
    colors.color1,
    colors.color2,
    colors.color3,
    colors.color4,
    colors.color5,
  ];
  const userdata = useSelector(state => state);
  const [loading, setloading] = useState(false);

  const addToCart = async () => {
    setloading(true);
    try {
      let response = await getResponsePost(
        `https://plants-backend-1.onrender.com/cart/${userdata?.login?.data?.success?._id}`,
        {
          productId: props?.route?.params?.data?._id,
        },
      );
      setloading(false);
      Alert.alert('Add to cart your product');
    } catch (e) {
      setloading(false);

      console.log(e, 'errror');
    }
    setloading(false);
  };

  const renderItem = ({}) => {
    return (
      <View style={[styles.container, {backgroundColor: '#fff'}]}>
        <DetailPageText text={'Water'} />
        <Text style={{fontSize: 30, color: colors.black}}>
          25<Text style={{fontSize: 14}}>%</Text>
        </Text>
      </View>
    );
  };
  return (
    <View style={styles.Main}>
      <Loader loading={loading} />
      <Headers text={'Product Info'} icon={true} />
      <ScrollView contentContainerStyle={{paddingBottom: 20}}>
        <Image source={Images.rose} style={styles.ImageCons} />
        <View style={styles.InsideCon}>
          <View>
            <Text style={styles.TextStyle}>
              {props.route?.params?.data.name
                ? props.route?.params?.data.name.toUpperCase()
                : 'Flower'}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 20,
              }}>
              <Text
                style={{
                  ...styles.discountPrice,
                  fontWeight: '500',
                  color: colors.black,
                }}>
                रु 200
              </Text>
              <Text
                style={{
                  ...styles.discountPrice,
                  fontSize: 13,
                  textDecorationLine: 'line-through',
                  color: colors.black,
                }}>
                रु 600
              </Text>
              <Text
                style={{
                  ...styles.discountPrice,
                  fontSize: 13,
                  color: colors.red,
                  // fontWeight: '500',
                }}>
                40% off
              </Text>
            </View>
          </View>
          <Pressable style = {styles.bgfav}>
            <Image
              source={Images.fav2}
              style={{
                width: 25,
                height: 25,
              }}
            />
          </Pressable>
        </View>
        {
          false && <FlatList
          data={[0, 1, 2, 3, 4, 5, 6]}
          renderItem={renderItem}
          horizontal={true}
          contentContainerStyle={{paddingHorizontal: 20, paddingVertical: 10}}
        />
        }
        <TextFile
          text={'Select Color: White'}
          styles={{
            color: colors.black,
            fontWeight: '600',
            marginTop: 20,
            marginHorizontal: 20,
          }}
        />
        <View style={styles.colorIncCons}>
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
         
        </View>
        {/* <View style={styles.inputFieldCon}>
          <TextInput
            keyboardType="numeric"
            style={[styles.inputStyle]}
            placeholder="Check Places"
            placeholderTextColor={colors.lightgreen3}
          />
          <Pressable>
            <Text style={styles.colorInput}>Check</Text>
          </Pressable>
        </View> */}
        <View style={styles.termsCon}>
          <Image source={Images.HomeIcon} style={{width: 20, height: 20}} />
          <Text style={styles.free}>
            Free <Text style={styles.free2}>Shipping</Text>
          </Text>
        </View>
        <View style={styles.termsCon}>
          <Image source={Images.HomeIcon} style={{width: 20, height: 20}} />
          <Text style={styles.free}>
            Cash <Text style={styles.free2}>on delivery available</Text>
          </Text>
        </View>
        <View style={styles.termsCon}>
          <Image source={Images.HomeIcon} style={{width: 20, height: 20}} />
          <Text style={styles.free}>
            Replacement Guarantee{' '}
            <Text
              style={[
                styles.free2,
                {
                  color: colors.yellowDark,
                  textDecorationLine: 'underline',
                },
              ]}>
              terms & Conditions
            </Text>{' '}
            <Text style={styles.free2}>Apply</Text>
          </Text>
        </View>
        <View style={styles.granty}>
          <RenderImageWithText image={Images.granty} text={'Granty'} />
          <RenderImageWithText image={Images.fast} text={'fast'} />
          <RenderImageWithText
            image={Images.replacement}
            text={'replacement'}
          />
        </View>
        <TypoGraphy style={styles.aboutText}>About me</TypoGraphy>
        <TypoGraphy style={styles.aboutTextIn}>
          Plants are also amazingly adaptable, finding ways to grow even in
          impossible environments, both hot and cold. Plants manufacture their
          own food from sunlight, absorb nutrients from the ground, and fool
          insects into spreading their pollen. Truly, they are some of nature's
          finest creations.
        </TypoGraphy>
        <FastImage
          source={Images.Indoor}
          style={{
            height: 250,
            marginHorizontal: 20,
            borderRadius: 5,
            marginVertical: 20,
          }}
        />
        <TypoGraphy
          style={{
            color: '#000',
            fontSize: 20,

            marginHorizontal: 30,
          }}>
          What's in the box
        </TypoGraphy>
        <DotWithText />
        <DotWithText />
        <DotWithText />
        <DotWithText />
      </ScrollView>
      <Button
        TextName={'Add to cart'}
        press={() => addToCart()}
        style={styles.OrderConParent}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  Main: {
    flex: 1,
    backgroundColor: colors.white,
  },
  ImageCons: {
    height: 350,
    marginHorizontal: 20,
    width: '90%',
    alignSelf: 'center',
    marginVertical: 20,
    borderRadius: 1,
    borderRadius: 10,
  },
  TextStyle: {
    color: colors.black,
    fontSize: 30,
    fontWeight: '500',
    textAlign: 'left',
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
    position: 'relative',
    bottom: 10,
    left: 0,
    right: 0,
  },
  discription: {
    textAlign: 'center',
    marginHorizontal: 20,
    color: colors.gray,
    marginTop: 10,
  },
  discountPrice: {
    fontSize: 20,
    // fontWeight: '5',
    color: colors.lightgreen,
    marginRight: 10,
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
    width: 25,
    height: 25,
    borderColor: colors.lightgreen,
    borderWidth: 1,
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
  InsideCon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 20,
  },
  container: {
    marginRight: 20,
    height: 140,
    width: 150,
    borderRadius: 10,
    // paddingVertical: 10,
    elevation: 4,
    padding: 10,
    justifyContent: 'center',
  },
  colorIncCons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputFieldCon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  colorInput: {
    color: colors.lightgreen3,
  },
  inputStyle: {
    color: colors.black,
    borderBottomColor: colors.lightgreen3,
    borderTopColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderWidth: 0.3,
    width: '70%',
  },
  free: {fontWeight: '600', color: colors.black, marginLeft: 10},
  free2: {color: colors.black, fontWeight: '400'},
  termsCon: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginVertical: 2,
  },
  granty: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 20,
  },
  aboutTextIn: {
    color: '#000',
    fontSize: 13,
    marginHorizontal: 20,
    lineHeight: 20,
  },
  aboutText: {
    color: '#000',
    marginHorizontal: 20,
    paddingBottom: 20,
    fontSize: 20,
    fontWeight: '500',
  },
  bgfav:{
    backgroundColor:'#f5f5f5',
    position:"absolute",
    right:20,
    padding:10,
    borderRadius:999,
    justifyContent:"center",
    alignItems:"center"
  }
});
