import {
  Image,
  Pressable,
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
import {useDispatch, useSelector} from 'react-redux';
import {loginSuccess} from '../../redux/reducers/login';
export function Profile({navigation}) {
  const userdata = useSelector(state => state?.login?.data?.success);
  const dispatch = useDispatch();
  console.log(userdata)
  return (
    <View style={{backgroundColor: colors.white, flex: 1}}>
      <Headers text={'Profile'} />
      <ScrollView contentContainerStyle={{marginHorizontal: 20}}>
        <View style={styles.MainHeaderLeftSideCon}>
          <TouchableOpacity
            style={{
              width: 70,
              height: 70,
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
          <View style={{flex: 1}}>
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
              {userdata?.locality}
            </Text>
          </View>
          <Pressable onPress={() => navigation.navigate('EditProfile')}>
            <Text style={styles.edit}>edit</Text>
          </Pressable>
        </View>

        <View />
        <ProfileCon text={'Profile'} />
        <ProfileCon text={'Refer A Friend'} />
        <ProfileCon text={'Manage Address'} />
        <ProfileCon text={'Contact'} />
        <ProfileCon text={'Feedback'} />
        <ProfileCon text={'Favourites'} />
        <ProfileCon text={'Delete Account'} />
        <ProfileCon text={'Logout'} press={() => dispatch(loginSuccess(''))} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  MainHeaderLeftSideCon: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: responsiveScreenWidth(1),
    flex: 1,
    paddingVertical: 50,
    justifyContent: 'space-between',
    padding: 5,
  },
  edit: {
    color: '#000',
    fontSize: 15,
  },
});
