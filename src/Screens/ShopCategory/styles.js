import { StyleSheet } from 'react-native'
import { colors } from '../../Contants/Colors'

export const styles = StyleSheet.create({
    MainCon:{
      
    width: '50%',
    marginTop:10,
    paddingHorizontal:10,
   
       

    },
    ImageShopStyle:{
        width:'100%',
        height:200,
        borderRadius:5,
        
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
        marginHorizontal:20,  
        marginTop:20
    },
    
})