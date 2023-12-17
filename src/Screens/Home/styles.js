import { StyleSheet } from "react-native"
import { responsiveFontSize,responsiveHeight,responsiveScreenWidth } from "react-native-responsive-dimensions"
import { colors } from "../../Contants/Colors"

export const styles = StyleSheet.create({
    Main:{
        flex:1,
        backgroundColor:colors.lightwheat,
       
    },
    BtnCon:{
        // paddingHorizontal:29,
        // paddingVertical:15,
        width:responsiveScreenWidth(28),
        height:responsiveHeight(5),
        justifyContent:'center',
        alignItems:'center',       
        backgroundColor:colors.lightgreen,
        // marginRight:20,
        // marginVertical:5,
        // marginHorizontal:5,
        borderRadius:10
    },
    BtnConParent:{
        marginTop:20,
        flexDirection:'row',
        paddingHorizontal:20
    },
    itemText:{
        fontSize:responsiveFontSize(2),
        fontWeight:'700',
        color:colors.white
    },
    RectenVieText:{
        fontSize:25,
        fontWeight:'600',
        color:colors.black,
        paddingLeft:20,
        marginTop:20
    },
})