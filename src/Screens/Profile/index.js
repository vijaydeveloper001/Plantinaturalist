import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ProfileCon from '../../Common/ProfileCon'
import { colors } from '../../Contants/Colors'
import Headers from '../../Common/Headers/Headers'
import { Images } from '../../assets/picture'
import { responsiveScreenWidth } from 'react-native-responsive-dimensions'

export function Profile() {
  return (
    <View style = {{backgroundColor:colors.white,flex:1}}>
      
      <Headers text={'Profile'}/>
      <ScrollView>
      <View style={styles.MainHeaderLeftSideCon}>
        <TouchableOpacity style = {{width:100,height:100,borderRadius:10000}}>
          <Image source={Images.Home} style={{width: '100%', height: '100%',borderRadius:1000}} resizeMode='contain' />
        </TouchableOpacity>
        <View>
        <Text style = {{color:colors.lightgreen,marginLeft:7}} numberOfLines={1}>Vijay kumar</Text>
        <Text style = {{color:'grey',marginLeft:7}} numberOfLines={1}>Mohali,Chandigarh</Text>
        </View>
      </View>
      <View/>
      <ProfileCon text={'Profile'}/>
      <ProfileCon text={'Refer A Friend'}/>
      <ProfileCon text={'Manage Address'}/>
      <ProfileCon text={'Contact'}/>
      <ProfileCon text={'Feedback'}/>
      <ProfileCon text={'Favourites'}/>
      <ProfileCon text={'Delete Account'}/>
      <ProfileCon text={'Logout'}/>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  MainHeaderLeftSideCon:{
    flexDirection:'row',
    alignItems:'center',
   
    borderRadius:responsiveScreenWidth(1),
    marginHorizontal:20,
    width:300,
    paddingVertical:50
},
})