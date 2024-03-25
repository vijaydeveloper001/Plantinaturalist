import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Headers from '../../Common/Headers/Headers';
import TextInputCon from '../../Common/TextInputCon';
import CheckBox from 'react-native-check-box';
import {colors} from '../../Contants/Colors';
export default function Coupons() {
  const couponItems = ({}) => {
    return (
      <View style={styles.applyCon}>
        <CheckBox style={{aheight: 25}} />
        <View style={styles.applytext}>
          <Text style={styles.stylesText}>HELLO</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={{flex: 1}}>
      <Headers text={'Coupons'} />
      <TextInputCon text={'Apply coupons'} search={true} />
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8]}
        renderItem={couponItems}
        keyExtractor={(item, index) => index}
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
    justifyContent: 'flex-start',
  },
  applytext: {
    marginLeft: 20,
  },
});
