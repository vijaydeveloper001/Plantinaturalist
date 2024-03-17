import {ScrollView, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import TextInputCon from '../../Common/TextInputCon';
import Button from '../../Common/Button';
import Headers from '../../Common/Headers/Headers';
export default function Shipping() {
  return (
    <View style={styles.Main}>
      <Headers text={'Shipping order'} />
      <ScrollView contentContainerStyle={{paddingBottom: 20}}>
        <TextInputCon
          text={'Email'}
          check={true}
          checktext={'Email me with news and offers'}
        />
        <TextInputCon
          text={'Phone'}
          check={true}
          checktext={'Receive shipping updates on whatsapp'}
        />
        <TextInputCon
          text={'Country/region'}
          TopText={'Shipping address'}
          check={false}
        />
        <TextInputCon text={'First name'} check={false} />
        <TextInputCon text={'Last name'} check={false} />
        <TextInputCon text={'Address'} check={false} />
        <TextInputCon text={'Appartment,suite etc'} check={false} />
        <TextInputCon text={'City'} check={false} />
        <TextInputCon text={'State'} check={false} />
        <TextInputCon text={'PIN code'} check={false} Last={true} />
        <Button TextName={'CONTINUE TO PAYMENT'} stle={20} />
      </ScrollView>
    </View>
  );
}
