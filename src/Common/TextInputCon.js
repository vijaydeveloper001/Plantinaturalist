import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {colors} from '../Contants/Colors';
import CheckBox from 'react-native-check-box';
export default function TextInputCon({text,gettext,check,TopText,checktext,Last}) {
  return (
    <View style={styles.Main}>
     {TopText && <Text style={{...styles.FieldsText, fontSize: 30,paddingVertical:20}}>{TopText}</Text>}
      <Text style={styles.FieldsText}>{text}</Text>
      <TextInput
        style={styles.TextInputStyle}
        placeholder={text}
        placeholderTextColor={colors.black}
      />
    {check && <View style={{marginTop: 10, flexDirection: 'row', alignItems: 'center'}}>
        <CheckBox
          style={{height: 20}}
          onClick={() => {
            console.log(true);
          }}
          isChecked={true}
          leftText={'CheckBox'}
          checkedCheckBoxColor={colors.lightgreen}
        />
        <Text style={styles.offers}>Email me with news and offers</Text>
      </View>}
      {Last && <View style={{marginTop: 10, flexDirection: 'row', alignItems: 'center'}}>
        <CheckBox
          style={{height: 20}}
          onClick={() => {
            console.log(true);
          }}
          isChecked={true}
          leftText={'CheckBox'}
          checkedCheckBoxColor={colors.lightgreen}
        />
        <Text style={styles.offers}>Email me with news and offers</Text>
      </View>}
    </View>
  );
}

const styles = StyleSheet.create({
  Main: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  FieldsText: {
    fontSize: 15,
    color: colors.black,
    fontWeight: '500',
  },
  TextInputStyle: {
    borderColor: colors.grey,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: colors.white,
    elevation: 1,
    paddingHorizontal: 10,
    height: 45,
    color: colors.black,
    marginTop: 10,
  },
  offers: {
    color: colors.black,
    marginLeft: 10,
  },
});
