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
import storage from '@react-native-firebase/storage';
import {ref, getDownloadURL, uploadBytesResumable} from 'firebase/storage';

export default function AddData() {
  const [data, setdata] = useState({
    name: '',
    soil: '',
    location: '',
    img: '',
  });
  console.log(data);
  const openCamera = async () => {
    try {
      await launchCamera({mediaType: 'photo', quality: 0.1}, async image => {
        console.log(image);
        // let upload = storage().ref('upload');
        const filename = image?.assets[0]?.uri.substring(
          image?.assets[0]?.uri.lastIndexOf('/') + 1,
        );
        const reference = storage().ref(filename);
        try {
          await reference.putFile(image?.assets[0]?.uri);
          const downloadURL = await reference.getDownloadURL();
          console.log('Image uploaded successfully!', downloadURL);
          setdata({...data, img: downloadURL});
        } catch (error) {
          console.error('Error uploading image: ', error);
        }

        // let imageRef = storage().ref('/' + image?.assets[0]?.uri);
        // imageRef
        //   .getDownloadURL()
        //   .then(url => {
        //     //from url you can fetch the uploaded image easily
        //     console.log(url);
        //   })
        //   .catch(e => console.log('getting downloadURL of image error => ', e));
      });
    } catch (e) {
      console.log(e);
    }
  };

  const openGallery = async () => {
    try {
      const result = await launchImageLibrary(
        {mediaType: 'photo'},
        async image => {
          console.log(image);

          const filename = image?.assets[0]?.uri.substring(
            image?.assets[0]?.uri.lastIndexOf('/') + 1,
          );
          const reference = storage().ref(filename);
          try {
            await reference.putFile(image?.assets[0]?.uri);
            const downloadURL = await reference.getDownloadURL();
            console.log('Image uploaded successfully!', downloadURL);
            setdata({...data, img: downloadURL});
          } catch (error) {
            console.error('Error uploading image: ', error);
          }
          // setdata({...data, img: image?.assets[0]?.uri});
        },
      );
    } catch (e) {
      console.log(e);
    }
  };

  const addData = async () => {
    try {
      if (data.name && data.soil && data.location && data.img) {
        let upload = firestore().collection('PostData').doc().set({
          Name: data.name,
          Soil: data.soil,
          Location: data.location,
          image: data.img,
        });
        console.log(upload);
      }

      setdata({
        name: '',
        soil: '',
        location: '',
        image: '',
      });
      Alert.alert('', 'Upload Succesfully');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.Main}>
      <ScrollView>
        <View style={styles.ItemCon}>
          <Text style={styles.ItemName}>Name</Text>
          <TextInput
            placeholder="Enter the flower name"
            style={styles.TextInputCon}
            value={data.name}
            onChangeText={text => setdata({...data, name: text})}
          />
        </View>
        <View style={styles.ItemCon}>
          <Text style={styles.ItemName}>Soil</Text>
          <TextInput
            placeholder="Enter the flower Soil"
            style={styles.TextInputCon}
            value={data.soil}
            onChangeText={text => setdata({...data, soil: text})}
          />
        </View>
        <View style={styles.ItemCon}>
          <Text style={styles.ItemName}>Name</Text>
          <TextInput
            placeholder="Enter the flower name"
            style={styles.TextInputCon}
            onChangeText={text => setdata({...data, name: text})}
          />
        </View>
        <View style={styles.ItemCon}>
          <Text style={styles.ItemName}>Name</Text>
          <TextInput
            placeholder="Enter the flower name"
            style={styles.TextInputCon}
            onChangeText={text => setdata({...data, name: text})}
          />
        </View>
        <View style={styles.ItemCon}>
          <Text style={styles.ItemName}>Name</Text>
          <TextInput
            placeholder="Enter the flower name"
            style={styles.TextInputCon}
            onChangeText={text => setdata({...data, name: text})}
          />
        </View>
        <View style={styles.ItemCon}>
          <Text style={styles.ItemName}>Location</Text>
          <TextInput
            placeholder="Enter the flower Location"
            style={styles.TextInputCon}
            value={data.location}
            onChangeText={text => setdata({...data, location: text})}
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
        <TouchableOpacity
          style={{
            ...styles.PostData,
            backgroundColor:
              data.name && data.location && data.soil && data.img
                ? '#3b5998'
                : '#3b5910',
          }}
          onPress={() => {
            if (data.name && data.location && data.soil && data.img) {
              addData();
            } else {
              Alert.alert('', 'All data is compulsory');
            }
          }}>
          <Text style={styles.ImageText}>POST</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
