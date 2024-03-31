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
} from 'react-native';
import {colors} from '../../Contants/Colors';
import {Images} from '../../assets/picture';
import Button from '../../Common/Button';
import TextFile from '../../Common/TextFile';
import {useNavigation} from '@react-navigation/native';
import Headers from '../../Common/Headers/Headers';
import DetailPageText from '../../Common/Headers/DetailPageText';
export default function DetailPlants(props) {
  const navigation = useNavigation();
  const [IncrePlant, setIncrePlant] = useState(1);
  let color = [colors.color1,colors.color2,colors.color3,'#afa2a3','#9ab0af']

  const renderItem = ({}) =>{
    return (
      <View style = {[styles.container,{backgroundColor:color[Math.floor(Math.random() * color.length)]}]}>
        <DetailPageText text={'Water'} />
        <Text style = {{fontSize:60,color:colors.white}}>25<Text style = {{fontSize:14}}>%</Text></Text>
      </View>
    )
  }
  return (
    <View style={styles.Main}>
      <Headers text={'Product Info'} icon={true} />
      <ScrollView contentContainerStyle={{paddingBottom: 20}}>
        <Image source={Images.Indoor} style={styles.ImageCons} />
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
                  fontWeight: '600',
                }}>
                40% off
              </Text>
            </View>
          </View>
          <Pressable>
            <Image
              source={Images.fav}
              style={{
                width: 30,
                height: 30,
                alignSelf: 'flex-start',
                marginTop: 9,
              }}
            />
          </Pressable>
        </View>
        <FlatList 
        data={[0,1,2,3,4,5,6]}
        renderItem={renderItem}
        horizontal = {true}
        contentContainerStyle = {{paddingHorizontal:20,paddingVertical:10}}
        />
        {/* <DetailPageText text={'Keep In Indirect Sunlight'} />
        <DetailPageText text={'Water Twice Per Week'} />
        <DetailPageText text={'Not Child Friendly'} />
        <DetailPageText text={'Puriflies Air'} />
        <DetailPageText text={'Comes With Self-Watering Pot'} /> */}
        {/* <TextFile
          text={'Select Planter: Poetic'}
          styles={{
            color: colors.black,
            fontWeight: '600',
            marginTop: 20,
            marginHorizontal: 20,
          }}
        /> */}
        {/* <View style={styles.WaterParCon}>
          <TouchableOpacity style={styles.WaterCon}>
            <Image source={Images.Flower} style={styles.ImageStyle} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.WaterCon}>
            <Image source={Images.Flower} style={styles.ImageStyle} />
          </TouchableOpacity>
        </View> */}
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
          <Text
            onPress={() =>
              IncrePlant >= 1 ? setIncrePlant(IncrePlant - 1) : ''
            }
            style={styles.IncreText}>
            -
          </Text>
          <Text style={styles.IncreText}>{IncrePlant}</Text>
          <Text
            onPress={() => setIncrePlant(IncrePlant + 1)}
            style={styles.IncreText}>
            +
          </Text>
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
    backgroundColor: colors.white,
  },
  ImageCons: {
    height: 350,
    marginHorizontal: 20,
    width: '90%',
    alignSelf: 'center',
    marginVertical: 20,
    borderRadius: 20,
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
    paddingBottom: 30,
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
  container:{
    marginRight:20,
    height:140,
    width:150,
    borderRadius:20,
    justifyContent:"space-between",
    alignItems:"center",
    paddingVertical:10
  }
});
