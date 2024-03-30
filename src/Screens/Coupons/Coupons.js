import {FlatList, StyleSheet, Text, View} from 'react-native';
import React,{useState} from 'react';
import Headers from '../../Common/Headers/Headers';
import TextInputCon from '../../Common/TextInputCon';
import CheckBox from 'react-native-check-box';
import {colors} from '../../Contants/Colors';
import Button from '../../Common/Button';
import { useNavigation } from '@react-navigation/native';
export default function Coupons() {
    const [checkbox, setcheckbox] = useState(false);
    const navigation = useNavigation();
  const couponItems = ({}) => {
    return (
      <View style={styles.applyCon}>
       <CheckBox
            style={{height: 25}}
            onClick={() => {
              console.log(true);
              setcheckbox(!checkbox);
            }}
            isChecked={checkbox}
            leftText={'CheckBox'}
            checkedCheckBoxColor={colors.lightgreen}
          />
        <View style={styles.applytext}>
          <Text style={styles.stylesText} numberOfLines={1}>Despite many pros</Text>
          <Text style={{...styles.stylesText,marginTop:5}} numberOfLines={1}>it’s worth acknowledging the cons</Text>
          <Text style={{...styles.stylesText,marginTop:5}} numberOfLines={1}>Here’s what to watch out for when including coupons in your promotional planning</Text>
        </View>
        <View style = {{justifyContent:'flex-end',width:120}}>
            <Button TextName = 'Apply' height={30} press={()=>navigation.goBack()}/>
        </View>
      </View>
    );
  };
  return (
    <View style={{flex: 1}}>
      <Headers text={'Coupons'} />
      <TextInputCon text={'Apply coupons'} search={true} />
      <FlatList
        data={[1]}
        renderItem={couponItems}
        keyExtractor={(item, index) => index}
        contentContainerStyle = {{paddingVertical:20}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  stylesText: {
    color: colors.black,
  },
  applyCon: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: colors.white,
    marginTop: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    height: 100,
    elevation: 5,
    justifyContent:'space-between',
  },
  applytext: {
    marginLeft: 20,
    justifyContent:'flex-start',
    flex:1
  },
});
