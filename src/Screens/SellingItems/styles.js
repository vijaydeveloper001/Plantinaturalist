import { StyleSheet } from "react-native"
import { colors } from "../../Contants/Colors"
export const styles = StyleSheet.create({
    MainCon:{
      
        width: '50%',
        marginTop:15,
        paddingHorizontal:6,
       
           
    
        },
        ImageShopStyle:{
            width:'100%',
            height:200,
            borderRadius:5,
            
        },
        shopNameText:{
            
            fontSize:20,
            fontWeight:'600',
            color:colors.black,
            marginTop:10
        },
        contentContainerStyles:{
            justifyContent:'space-between',
            marginHorizontal:20,  
            marginTop:20
        },

        addToCart:{
            height:40,
            backgroundColor:colors.lightgreen,
            justifyContent:'center',
            alignItems:'center',
           
        },
        PriceCon:{
            flexDirection:'row',
            paddingVertical:10,
            alignItems:'center'
        },
        cureentprice:{
            textDecorationLine:'line-through',
            fontSize:15,
            fontWeight:'600'
        },
        discountPrice:{
            fontSize:17,
            fontWeight:'600',
            color:colors.lightgreen,
            paddingLeft:7
        },
        addToCartText:{
             color:colors.white,
             fontWeight:'600'
        },
        discountText:{
            fontSize:18,
            backgroundColor:colors.yellowDark,
            position:'absolute',
            paddingVertical:1,
            paddingHorizontal:12,
            margin:5,
            borderRadius:5,
            color:'black'
        }
})
