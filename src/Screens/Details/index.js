import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { colors } from '../../Contants/Colors';
import FastImage  from 'react-native-fast-image';
import { Images } from '../../assets/picture';
export default function DetailPlants(props) {
  console.log(props.route?.params?.data, 'asfasf');
  return (
    <View style={styles.Main}>
    <ScrollView >
      <FastImage source={Images.Herbs} style={styles.ImageCons} />
      <Text style={styles.TextStyle}>{props.route?.params?.data.name?props.route?.params?.data.name:"Flower"}</Text>
      {/* <Text style={styles.TextStyle}>{props.route?.params?.data.Soil}</Text>
      <Text style={styles.TextStyle}>{props.route?.params?.data.Location}</Text> */}
      <Text style={styles.discription}>
        Plants, Earth's quiet architects, paint the canvas of our world with
        hues of green and tales of survival. From the humble blades of grass to
        the majestic trees, they breathe life into ecosystems. Through
        photosynthesis, they convert sunlight into sustenance, releasing the
        oxygen we depend on. Roots delve into the soil, anchoring and extracting
        vital nutrients. Leaves, intricate solar panels, capture the sun's
        energy, fostering growth. Flowers, nature's artists, bloom in a symphony
        of colors, beckoning pollinators. Plants are silent communicators,
        responding to environmental cues with chemical whispers. In their
        resilience lies a testament to the intertwined dance of life.
      </Text>
    
    </ScrollView>
    <View style={styles.OrderConParent}>
        <TouchableOpacity style={styles.OrderCon}>
          <Text style={styles.PlaceOrderText}>Place order</Text>
        </TouchableOpacity>
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
    marginHorizontal:20,
    marginTop: 20,
  
  },
  TextStyle: {
    color: colors.black,
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 20,
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
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 30,
  },
  discription: {
    textAlign: 'center',
    marginHorizontal: 20,
    color: colors.gray,
    marginTop: 10,
  },
});
