import { StyleSheet } from "react-native"
import { colors } from "../../Contants/Colors"
import { responsiveHeight } from "react-native-responsive-dimensions"
export const styles = StyleSheet.create({
    MainCon:{
      
        width: '50%',
        marginTop:10,
        paddingHorizontal:20,
        height:responsiveHeight(19),
       
       
           
    
        },
        ImageShopStyle:{
            width:'100%',
            height:'100%',
            borderRadius:5,
            borderRadius:responsiveHeight(40)
            
        },
        shopNameText:{
            textAlign:'center',
            fontSize:20,
            fontWeight:'600',
            color:colors.black,
            marginTop:10
        },
        contentContainerStyles:{
            justifyContent:'space-between',
            // marginHorizontal:20,  
            marginTop:20
        },
})
