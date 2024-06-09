import {Platform, StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Headers from '../../Common/Headers/Headers';
import Button from '../../Common/Button';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
export default function Otp() {
  const [start, setstart] = useState(false);
  const [second, setsecond] = useState(59);
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: 6});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  useEffect(() => {
    let timer;
    if (start && second !== 0) {
      timer = setTimeout(() => {
        setsecond(prev => prev - 1);
      }, 1000);
    } else if (start && second === 0) {
      setsecond(59);
      setstart(false);
    }

    return () => clearTimeout(timer);
  }, [start, second]);
  return (
    <View style={styles.main}>
      <StatusBar backgroundColor={'#f2f2f0'} barStyle={'dark-content'} />
      <Headers text={'Otp'} />
      <View style={{flex: 1, marginHorizontal: 20}}>
        <CodeField
          ref={ref}
          {...props}
          // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
          value={value}
          onChangeText={setValue}
          cellCount={6}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          autoComplete={Platform.select({
            android: 'sms-otp',
            default: 'one-time-code',
          })}
          testID="my-code-input"
          renderCell={({index, symbol, isFocused}) => (
            <Text
              key={index}
              style={[styles.cell, isFocused && styles.focusCell]}
              onLayout={getCellOnLayoutHandler(index)}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          )}
        />
        <Text style={styles.text}>Wait for time 0:{second}</Text>

        <Button
          TextName={'Verify'}
          style={{marginHorizontal: 0, marginTop: 20}}
          press={() => setstart(true)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#f2f2f0',
  },
  text: {
    color: '#000',
  },
  root: {flex: 1, padding: 20},
  title: {textAlign: 'center', fontSize: 30},
  codeFieldRoot: {marginVertical: 20},
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 0.5,
    borderBottomWidth: 0.2, // Only bottom border
    borderBottomColor: 'grey',
    borderTopWidth: 0, // Ensure no top border
    borderRightWidth: 0, // Ensure no right border
    borderLeftWidth: 0, // Ensure no left border
    textAlign: 'center',
    color: '#000',
  },
  focusCell: {
    borderColor: '#000',
  },
});
