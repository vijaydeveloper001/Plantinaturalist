import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {colors} from '../../Contants/Colors';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import firestore from '@react-native-firebase/firestore';
import RNFS from 'react-native-fs';
import base64 from 'base64-js';
export default function AddData() {
   
  const [data, setdata] = useState({
    name: '',
    soil: '',
    location: '',
    img: '',
  });
  console.log(data)
  const openCamera = async () => {
    
   
    try {
      const result = await launchCamera({mediaType: 'photo',includeBase64:true}, image => {
        
        RNFS.readFile( image?.assets[0]?.uri, "base64").then(data => {
            // binary data
            console.log(data);
          });
        setdata({...data, img: image?.assets[0]?.uri});
      });
    } catch (e) {
      console.log(e);
    }
  };

  const openGallery = async () => {
    try {
      const result = await launchImageLibrary({mediaType: 'photo'}, image => {
        console.log(image);
        setdata({...data, img: image?.assets[0]?.uri});
      });
    } catch (e) {
      console.log(e);
    }
  };

  const imageToBase64 = async (imageUri) => {
    try {
      // Read the image file
      const imageFile = await RNFS.readFile(imageUri, 'base64');
  
      // Convert the base64-encoded string to a Uint8Array
      const uint8Array = base64.toByteArray(imageFile);
  
      // Use the uint8Array as needed (e.g., for uploading to a server)
      console.log('Binary image data:', uint8Array);
    } catch (error) {
      console.error('Error reading or encoding image:', error);
    }
  };

  const addData = async () =>{
    
    try{
    // const uploadData = firestore().collection('PostData').doc().set({
    //     Name:data.name,
    //     Soil:data.soil,
    //     Location:data.location,
    //     image:form
    // })
    // setdata({
    //     name:'',
    //     soil:'',
    //     location:'',
    //     image:''
    // })
    // Alert.alert('','Upload Succesfully')
}
    
    catch(e){
        console.log(e)
    }
  }



  return (
    <View style={styles.Main}>
      <ScrollView>
        <View style={styles.ItemCon}>
          <Text style={styles.ItemName}>Name</Text>
          <TextInput
            placeholder="Enter the flower name"
            style={styles.TextInputCon}
            value = {data.name}
            onChangeText={(text)=>setdata({...data,name:text})}
          />
        </View>
        <View style={styles.ItemCon}>
          <Text style={styles.ItemName}>Soil</Text>
          <TextInput
            placeholder="Enter the flower Soil"
            style={styles.TextInputCon}
            value = {data.soil}
            onChangeText={(text)=>setdata({...data,soil:text})}
          />
        </View>
        <View style={styles.ItemCon}>
          <Text style={styles.ItemName}>Name</Text>
          <TextInput
            placeholder="Enter the flower name"
            style={styles.TextInputCon}
            onChangeText={(text)=>setdata({...data,name:text})}
          />
        </View>
        <View style={styles.ItemCon}>
          <Text style={styles.ItemName}>Name</Text>
          <TextInput
            placeholder="Enter the flower name"
            style={styles.TextInputCon}
            onChangeText={(text)=>setdata({...data,name:text})}
          />
        </View>
        <View style={styles.ItemCon}>
          <Text style={styles.ItemName}>Name</Text>
          <TextInput
            placeholder="Enter the flower name"
            style={styles.TextInputCon}
            onChangeText={(text)=>setdata({...data,name:text})}
          />
        </View>
        <View style={styles.ItemCon}>
          <Text style={styles.ItemName}>Location</Text>
          <TextInput
            placeholder="Enter the flower Location"
            style={styles.TextInputCon}
            value = {data.location}
            onChangeText={(text)=>setdata({...data,location:text})}
          />
        </View>
       
    
        {data.img && <Image source={{uri: data.img}} style={styles.imgStyle} />}
        <View style={styles.CameraCon}>
          <TouchableOpacity
            style={styles.ImageUploadCon}
            onPress={() => openCamera()}>
            <Text style={styles.ImageText}>Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.ImageUploadCon}
            onPress={() => openGallery()}>
            <Text style={styles.ImageText}>Upload from Gallery</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.PostData} onPress={()=>addData()}>
          <Text style={styles.ImageText}>POST</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
