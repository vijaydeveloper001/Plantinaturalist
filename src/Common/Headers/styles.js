import { StyleSheet } from "react-native";
import { colors } from "../../Contants/Colors";
import {responsiveHeight,responsiveScreenWidth, } from "react-native-responsive-dimensions"


export const styles = StyleSheet.create({
    MainHeader:{
        backgroundColor:colors.white,
        // height:responsiveHeight(8),
        // flex:0.08,
        height:responsiveHeight(15),
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
    
      
    },
    MainHeaderLeftSideCon:{
        flexDirection:'row',
        alignItems:'center',
       
        borderRadius:responsiveScreenWidth(1),
        width:300
     
      
    },
    TextInputStyle:{
        width:responsiveScreenWidth(55),
        color:colors.grey,
        fontWeight:'600',
        marginLeft:5,
        
    },
    IconHeartCon:{
        backgroundColor:colors.lightgreen,
        elevation:5,
        borderRadius:5,
        padding:5
    }
})