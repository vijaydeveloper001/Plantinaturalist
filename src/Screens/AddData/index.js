import {Text, View ,TextInput,TouchableOpacity,Image, ScrollView} from 'react-native'
import React,{useState} from 'react'
import { styles } from './styles'
import { colors } from '../../Contants/Colors'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
export default function AddData(){
    const [data, setdata] = useState({
        img:''
    })
    const openCamera = async () =>{
        try{
            const result = await launchCamera(({mediaType:'photo'}),(image)=>{
                console.log((image?.assets[0]?.uri))
                setdata({...data,img:image?.assets[0]?.uri})
            })
        }catch(e){
            console.log(e)
        }
    }
    const openGallery = async () =>{
        try{
            const result = await launchImageLibrary(({mediaType:'photo'}),(image)=>{
                console.log((image?.assets[0]?.uri))
                setdata({...data,img:image?.assets[0]?.uri})
            })
        }catch(e){
            console.log(e)
        }
    }
  return (
    <View style = {styles.Main}>
        <ScrollView >
        <View style = {styles.ItemCon}>
            <Text style = {styles.ItemName}>Name</Text>
            <TextInput placeholder='Enter the flower name' style = {styles.TextInputCon}/>
        </View>
        <View style = {styles.ItemCon}>
            <Text style = {styles.ItemName}>Soil</Text>
            <TextInput placeholder='Enter the flower Soil' style = {styles.TextInputCon}/>
        </View>
        <View style = {styles.ItemCon}>
            <Text style = {styles.ItemName}>Name</Text>
            <TextInput placeholder='Enter the flower name' style = {styles.TextInputCon}/>
        </View>
        <View style = {styles.ItemCon}>
            <Text style = {styles.ItemName}>Name</Text>
            <TextInput placeholder='Enter the flower name' style = {styles.TextInputCon}/>
        </View>
        <View style = {styles.ItemCon}>
            <Text style = {styles.ItemName}>Name</Text>
            <TextInput placeholder='Enter the flower name' style = {styles.TextInputCon}/>
        </View>
        <View style = {styles.ItemCon}>
            <Text style = {styles.ItemName}>Location</Text>
            <TextInput placeholder='Enter the flower Location' style = {styles.TextInputCon}/>
        </View>
        {data.img && 
            <Image source={{uri:data.img}} style = {styles.imgStyle}/>}
        <View style = {styles.CameraCon}>
        <TouchableOpacity style = {styles.ImageUploadCon} onPress={()=>openCamera()}>
            <Text style = {styles.ImageText}>Camera</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.ImageUploadCon} onPress={()=>openCamera()}>
            <Text style = {styles.ImageText}>Upload from Gallery</Text>
        </TouchableOpacity>
        </View>
        <TouchableOpacity style = {styles.PostData} >
            <Text style = {styles.ImageText}>POST</Text>
        </TouchableOpacity>
        </ScrollView>
    </View>
  )
}

