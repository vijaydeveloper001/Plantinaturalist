import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {AppIcon, Images} from '../../assets/picture';
import {responsiveScreenWidth} from 'react-native-responsive-dimensions';
import {colors} from '../../Contants/Colors';
import {
  KeyLogin,
  LocalDBClear,
  LocalDBRemove,
  getItem,
} from '../../Contants/LocalDB';
import {firebase} from '@react-native-firebase/auth';
import {Screens} from '../../Contants/NaivgationName';
export const Profile = ({navigation}) => {
  // Replace 'JohnDoe' with the actual username from your data

  const [data, setdata] = useState({
    userdata: '',
  });

  useEffect(() => {
    const userData = async () => {
      let user = await getItem(KeyLogin);
      setdata({
        userdata: JSON.parse(user),
      });
    };
    userData();
  }, []);

  console.log(data)
  const handleLogout = async () => {
    try {
      let logout = await firebase.auth().signOut();
      console.log(logout, 'logout>>>>>>>>>>><<<<<<<<<<,');
      await LocalDBRemove(KeyLogin);

      navigation.navigate(Screens.LOGIN);
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        {/* <Image
          style={styles.avatar}
          source={Images.ImageBackground}

        /> */}
        {AppIcon('user', 200)}
      </View>
      <Text style={styles.username}>{data?.userdata?.user?.displayName}</Text>
      <Text style={styles.username}>{data?.userdata?.user?.email}</Text>

      <View style={styles.AccountButton}>
        <TouchableOpacity style={styles.logoutButton}  >
          <Text style={styles.logoutText}>Update Account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.logoutButton}  >
          <Text style={styles.logoutText}>Delete Account</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileContainer: {
    width: 300,
    height: 300,
    borderRadius: responsiveScreenWidth(200),
    marginBottom: 10,
    alignSelf: 'center',
    elevation: 10,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: '100%',
    height: '100%',
    borderRadius: responsiveScreenWidth(200),
    // marginBottom: 10,
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 60,
  },
  logoutButton: {
    marginTop: 20,
    backgroundColor: colors.lightgreen,
    marginHorizontal: 20,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  logoutText: {
    color: '#fff',
    marginLeft: 10,
    fontSize: 16,
    fontWeight: '600',
  },
  AccountButton: {
    flex: 1,
    justifyContent: 'center',
  },
});
