import { StyleSheet, Text, View ,FlatList,ImageBackground, TouchableOpacity,Image} from 'react-native'
import React from 'react'
import { Images } from '../../assets/Images'
import {responsiveHeight,responsiveScreenWidth} from 'react-native-responsive-dimensions'
import { colors } from '../../Contants/Colors'
export default function Indoor() {

    const renderItemIndoor = ({item,index}) =>{
        return (
            <View style = {styles.RenderItem}>
                <Image source={Images.nature} style = {styles.ImageCon} />
                    <TouchableOpacity style = {styles.LikeCon}/>
                
                <Text style = {styles.TypeText}>Indoor</Text>
                <Text style = {styles.TypeTextRoseName}>Nature</Text>
            </View>
        )
    }
  return (
    <View style = {styles.MainIndoor}>
      <FlatList data={[0,1,2,3,4]} renderItem={renderItemIndoor} horizontal = {true} showsHorizontalScrollIndicator = {false}/>
    </View>
  )
}

const styles = StyleSheet.create({
    MainIndoor:{
        paddingHorizontal:20,
        marginTop:22
    },
    RenderItem:{
        height:320,
        width:250,
        marginRight:20,
        backgroundColor:colors.white,
        borderRadius:5

        
    },
    ImageCon:{
        width:'100%',
        height:230,
        borderTopRightRadius:5,
        borderTopLeftRadius:5,
        
    },
    TypeText:{
        fontSize:15,
        color:colors.gray,
        paddingLeft:10,
        marginTop:5
    },
    TypeTextRoseName:{
        fontSize:20,
        fontWeight:'700',
        color:colors.black,
        paddingLeft:10
    },
    LikeCon:{
        width:30,
        height:30,
        backgroundColor:colors.white,
        borderRadius:5,
        position:'absolute',
        right:0,
        margin:10
    }
    
})