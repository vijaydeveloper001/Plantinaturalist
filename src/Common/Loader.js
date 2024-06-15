import React from 'react';
import {
  ActivityIndicator,
  View,
  StyleSheet,
  Modal,
} from 'react-native';
import {colors} from '../Contants/Colors';
const Loader = ({Loading=false}) => {
  return (
      <Modal visible = {Loading} transparent>
        <View style={styles.LoaderCon}>
        <View style={styles.LoaderConIn}>
          <ActivityIndicator size="large" color={'#5454'} />
          {/* <Text style={styles.LoaderConText}>Loading... Please wait</Text> */}
          </View>
        </View>
      </Modal>
  );
};

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
    zIndex: 1, // Optional: Add a semi-transparent background
  },
  LoaderConText: {
    fontSize: 20,
    color: colors.lightgreen,
    fontWeight: '600',
  },
  LoaderCon: {
    
    flex:1,zIndex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  LoaderConIn:{
    backgroundColor: colors.white,
    borderRadius: 5,
    padding: 10,
    elevation:10
  }
});

export default Loader;
