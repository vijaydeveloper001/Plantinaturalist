import {StyleSheet, Text} from 'react-native';
import React from 'react';



const TypoGraphy = ({children, style, ...rest}) => {
  return (
    <Text style={[styles.textStyle, style]} {...rest}>
      {children}
    </Text>
  );
};

export default TypoGraphy;

const styles = StyleSheet.create({
  textStyle: {},
});
