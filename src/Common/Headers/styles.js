import { StyleSheet } from "react-native";
import { colors } from "../../Contants/Colors";
import { responsiveFontSize,responsiveHeight,responsiveScreenWidth, } from "react-native-responsive-dimensions"


export const styles = StyleSheet.create({
    MainHeader:{
        // backgroundColor:colors.lightblack,
        // height:responsiveHeight(8),
        // flex:0.08,
        height:responsiveHeight(8),
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        paddingHorizontal:20,
      
    },
    MainHeaderLeftSideCon:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor:colors.white,
        borderRadius:responsiveScreenWidth(1),
        paddingHorizontal:5,
        borderWidth:1,
        borderColor:colors.grey
    },
    TextInputStyle:{
        width:responsiveScreenWidth(55),
        color:colors.grey,
        fontWeight:'600',
        marginLeft:5,
        
    },
    IconHeartCon:{
        backgroundColor:colors.white,
        padding:10,
        borderRadius:10
    }
})