import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppNavgigation from './AppNavigation/AppNavgigation';
import AuthNavigation from './AuthNavigation/AuthNavigation';
import {useSelector} from 'react-redux';

export default function Route() {
  let userdata = useSelector(state => state?.login?.data?.success);
  return (
    <View style={{flex: 1}}>
      {/* {userdata ? <AppNavgigation /> : <AuthNavigation />} */}
      <AppNavgigation />
    </View>
  );
}

const styles = StyleSheet.create({});
