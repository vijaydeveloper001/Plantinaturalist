import React from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import { colors } from '../Contants/Colors';

const ModalItem = ({onyes,oncancel,value}) => {

  return (

      <Modal
        animationType="none"
        transparent={true}
        visible={value}
        statusBarTranslucent
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
     
            <Text style={{...styles.modalText,fontSize:25}}>Confirm</Text>
            <Text style={{...styles.modalText,marginBottom:35}}>Are you sure want to delete item</Text>
           
            <View style = {styles.btn}>
            <Pressable
              style={[styles.button]}
              onPress={oncancel}>
              <Text style={styles.textStyle}>No</Text>
            </Pressable>
            <View style = {styles.line}/>
            <Pressable
              style={[styles.button]}
              onPress={onyes}>
              <Text style={styles.textStyle}>Yes</Text>
            </Pressable>
            </View>
          </View>
    
        </View>
      </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'rgba(0, 0, 0, 0.5)'
  
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent:'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width:300,
    height:200
  },
  button: {
    width:'50%',
    height:'100%',
    justifyContent:'center',
  },
  textStyle: {
    color:colors.lightgreen2,
    textAlign: 'center',
    fontSize:20,
  },
  modalText: {
    marginBottom: 20,
    textAlign: 'center',
    color:colors.black,
  },
  btn:{
    flexDirection:'row',
    justifyContent:'space-between',
    position:'absolute',
    bottom:0,
    height:50,
    borderTopColor:colors.lightgreen3,
    borderWidth:0.3,
  },
  line:{
    borderRightColor:colors.lightgreen3,
    borderWidth:0.3,
  }
});


export default ModalItem
