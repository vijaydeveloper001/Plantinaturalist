import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Images} from '../../assets/picture';
import {colors} from '../../Contants/Colors';
import Headers from '../../Common/Headers/Headers';
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
]
export default function Cart() {
  const renderitem = ({item}) => {
    return (
      <View style={styles.MainRender}>
        <Image source={item.img} style={{width: '20%', height: '80%',}}/>
        <View style={styles.TextCon}>
          <Text style={{color: colors.lightgreen, fontSize: 18,fontWeight:"600"}}>रु 832</Text>
          <Text style={{color: colors.black, fontSize: 12}} numberOfLines={1}>
            Flower item
          </Text>
          <Text style={{color: colors.black, fontSize: 8}}>6 Item</Text>
        </View>
        <View style={styles.ProductIncres}>
          <TouchableOpacity style={styles.btn}>
            <Text style = {{fontSize:20,textAlign:'center',color:colors.white}}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style = {{fontSize:15,color:colors.black,paddingHorizontal:10}}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style = {{fontSize:20,textAlign:'center',color:colors.white}}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <View>
      <Headers text={'Cart'}/>
      <FlatList
        data={data}
        renderItem={renderitem}
        keyExtractor={(item, index) => index}
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
    paddingHorizontal:20,
    borderRadius:10,
  },
  TextCon: {
    width: '50%',
    height:'100%'
    ,justifyContent:'space-between',
    paddingVertical:20
  },
  ProductIncres: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btn: {
    backgroundColor: colors.lightgreen,
    borderRadius: 2,
    width:25,
    
    
    
    
  
  },
});
