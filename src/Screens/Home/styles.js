import { StyleSheet } from "react-native"
import { responsiveFontSize } from "react-native-responsive-dimensions"
import { colors } from "../../Contants/Colors"

export const styles = StyleSheet.create({
    Main:{
        flex:1,
        // backgroundColor:'#',
       
    },
    BtnCon:{
        // paddingHorizontal:29,
        // paddingVertical:15,
        // width:responsiveScreenWidth(28),
        // height:responsiveHeight(5),
        justifyContent:'center',
        alignItems:'center',       
        // backgroundColor:colors.lightgreen,
        // elevation:5,
        // marginRight:20,
        // marginVertical:5,
        // marginHorizontal:5,
        borderRadius:10,
    },
    BtnConParent:{
        marginTop:30,
        flexDirection:'row',
        paddingHorizontal:20
    },
    itemText:{
        fontSize:responsiveFontSize(2),
        fontWeight:'500',
        color:colors.white
    },
    RectenVieText:{
        fontSize:25,
        fontWeight:'600',
        color:colors.black,
        paddingLeft:20,
        marginTop:20
    },
    ItemTypeText:{
        fontSize:30,
        color:colors.black,
        fontWeight:'700',
        // textAlign:'center',
        marginTop:20,
        marginHorizontal:20
    }
})