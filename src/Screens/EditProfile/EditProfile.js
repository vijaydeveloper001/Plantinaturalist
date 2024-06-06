import {Alert, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Headers from '../../Common/Headers/Headers';
import TextInputCon from '../../Common/TextInputCon';
import Button from '../../Common/Button';
import {useDispatch, useSelector} from 'react-redux';
import {getResponseonlyPut} from '../../api/Api';
import {loginSuccess} from '../../redux/reducers/login';
import Loader from '../../Common/Loader';

export default function EditProfile() {
  const userdata = useSelector(state => state?.login?.data?.success);
  const dispatch = useDispatch();
  const [inputData, setinputData] = useState({
    email: userdata?.email,
    name: userdata?.name,
    mobileNo: userdata?.mobileNo,
    streetNo: userdata?.streetNo,
    tehsil: userdata?.tehsil,
    state: userdata?.state,
    locality: userdata?.locality,
    pincode: userdata?.pincode,
  });
  const [loading, setloading] = useState(false);
  const updateUser = async () => {
    setloading(true);
    try {
      let response = await getResponseonlyPut(
        `https://plants-backend-1.onrender.com/user/${userdata?._id}`,
        inputData,
      );
      console.log(response?.data?.userData, 'dfgdfgfd');
      dispatch(loginSuccess(response?.data?.userData));
      setloading(false);

      Alert.alert('Edit Profile', 'Updated your profile');
    } catch (e) {
      setloading(false);

      console.log(e, 'error in edit profile component');
    }
    setloading(false);
  };
  return (
    <View style={styles.main}>
      <Headers text={'Edit Profile'} />
      <Loader Loading={loading} />
      <ScrollView
        style={styles.inMain}
        contentContainerStyle={{paddingBottom: 40}}>
        <TextInputCon
          text={'Enter the name'}
          gettext={text => setinputData({...inputData, name: text})}
          value={inputData?.name}
        />
        <TextInputCon
          text={'Enter the Email'}
          gettext={text => setinputData({...inputData, email: text})}
          value={inputData?.email}
          edit={true}
        />
        <TextInputCon
          text={'Enter the Locality'}
          gettext={text => setinputData({...inputData, locality: text})}
          value={inputData?.locality}
        />
        <TextInputCon
          text={'Enter the Street No'}
          gettext={text => setinputData({...inputData, streetNo: text})}
          value={inputData?.streetNo}
        />
        {/* <TextInputCon
          text={'Enter the mobile no'}
          gettext={text => setinputData({...inputData, mobileNo: text})}
          value = {inputData?.mobileNo}

        /> */}
        <TextInputCon
          text={'Enter the pincode'}
          gettext={text => setinputData({...inputData, pincode: text})}
          value={inputData?.pincode.toString()}
        />
        <TextInputCon
          text={'Enter the state'}
          gettext={text => setinputData({...inputData, state: text})}
          value={inputData?.state}
        />
        <TextInputCon
          text={'Enter the teshil'}
          gettext={text => setinputData({...inputData, tehsil: text})}
          value={inputData.tehsil}
        />
        <Button
          TextName="Update"
          style={{marginHorizontal: 0, marginTop: 20}}
          press={() => updateUser()}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  inMain: {
    flex: 1,
    marginHorizontal: 20,
  },
});
