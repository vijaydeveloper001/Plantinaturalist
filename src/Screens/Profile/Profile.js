import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import ProfileCon from '../../Common/ProfileCon';
import {colors} from '../../Contants/Colors';
import Headers from '../../Common/Headers/Headers';
import {Images} from '../../assets/picture';
import {responsiveScreenWidth} from 'react-native-responsive-dimensions';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess } from '../../redux/reducers/login';
export function Profile() {
  const userdata = useSelector(state=>state?.login?.data?.success)
  const dispatch = useDispatch()
  return (
    <View style={{backgroundColor: colors.white, flex: 1}}>
      <Headers text={'Profile'} />
      <ScrollView contentContainerStyle={{marginHorizontal: 20}}>
        <View style={styles.MainHeaderLeftSideCon}>
          <TouchableOpacity
            style={{
              width: 100,
              height: 100,
              borderRadius: 999,
              padding: 2,
              backgroundColor: colors.white,
              elevation: 5,
            }}>
            <Image
              source={Images.Home}
              style={{width: '100%', height: '100%', borderRadius: 1000}}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <View>
            <Text
              style={{color: colors.lightgreen, marginLeft: 7, fontSize: 20}}
              numberOfLines={1}>
              {userdata?.name}
            </Text>
            <Text
              style={{
                color: 'grey',
                marginLeft: 7,
                marginVertical: 10,
                fontSize: 16,
              }}
              numberOfLines={1}>
              {userdata?.mobileNo}
            </Text>
          </View>
        </View>
        <View />
        <ProfileCon text={'Profile'} />
        <ProfileCon text={'Refer A Friend'} />
        <ProfileCon text={'Manage Address'} />
        <ProfileCon text={'Contact'} />
        <ProfileCon text={'Feedback'} />
        <ProfileCon text={'Favourites'} />
        <ProfileCon text={'Delete Account'} />
        <ProfileCon text={'Logout'}  press={()=>dispatch(loginSuccess(''))}/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  MainHeaderLeftSideCon: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: responsiveScreenWidth(1),
    width: 300,
    paddingVertical: 50,
  },
});
