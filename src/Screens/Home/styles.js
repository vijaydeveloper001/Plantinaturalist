import { StyleSheet } from "react-native"
import { responsiveFontSize } from "react-native-responsive-dimensions"
import { colors } from "../../Contants/Colors"

export const styles = StyleSheet.create({
    Main:{
        flex:1,
        paddingHorizontal:10
    },
    BtnCon:{
        
        justifyContent:'center',
        alignItems:'center',       
        
        borderRadius:10,
    },
    BtnConParent:{
        marginVertical:20,
        flexDirection:'row',
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
    }
})