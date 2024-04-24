import {StyleSheet, Text, TextInput, View, Image, Pressable} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../Contants/Colors';
import CheckBox from 'react-native-check-box';
import {Images} from '../assets/picture';
export default function TextInputCon({
  text,
  gettext,
  check,
  TopText,
  checktext,
  Last,
  topheading,
  margin,
  search,
  edit,
  press,
  ...rest
}) {
  const [checkbox, setcheckbox] = useState(false);
  return (
    <View style={{...styles.Main, marginTop: margin ? margin : 20}}>
      {TopText && (
        <Text style={{...styles.FieldsText, fontSize: 30, paddingVertical: 20}}>
          {TopText}
        </Text>
      )}
      {topheading && <Text style={styles.FieldsText}>{text}</Text>}
      <Pressable style={styles.TextInputStyle} onPress = {press}>
        {search && (
          <Image source={Images.search} style={{width: 20, height: 20}} />
        )}
        <TextInput
          placeholder={text}
          placeholderTextColor={colors.black}
          style={{color: colors.black, flex: 1}}
          editable = {!edit}
          {...rest}
        />
      </Pressable>
      {check && (
        <View
          style={{marginTop: 10, flexDirection: 'row', alignItems: 'center'}}>
          <CheckBox
            style={{height: 20}}
            onClick={() => {
              console.log(true);
              setcheckbox(!checkbox);
            }}
            isChecked={checkbox}
            leftText={'CheckBox'}
            checkedCheckBoxColor={colors.lightgreen}
          />
          <Text style={styles.offers}>Email me with news and offers</Text>
        </View>
      )}
      {Last && (
        <View
          style={{marginTop: 10, flexDirection: 'row', alignItems: 'center'}}>
          <CheckBox
            style={{height: 20}}
            onClick={() => {
              setcheckbox(!checkbox);
            }}
            isChecked={checkbox}
            leftText={'CheckBox'}
            checkedCheckBoxColor={colors.lightgreen}
          />
          <Text style={styles.offers}>Email me with news and offers</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  Main: {
    marginTop: 20,
  },
  FieldsText: {
    fontSize: 15,
    color: colors.black,
  },
  TextInputStyle: {
    borderColor: colors.grey,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: colors.white,
    elevation: 1,
    paddingHorizontal: 10,
    height: 45,

    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  offers: {
    color: colors.black,
    marginLeft: 10,
  },
});
