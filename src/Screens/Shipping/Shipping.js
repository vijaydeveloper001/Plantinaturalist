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
          topheading={true}
        />
        <TextInputCon
          text={'Phone'}
          check={true}
          checktext={'Receive shipping updates on whatsapp'}
          topheading={true}
        />
        <TextInputCon
          text={'Country/region'}
          TopText={'Shipping address'}
          check={false}
          topheading={true}
        />
        <TextInputCon text={'First name'} check={false} topheading={true} />
        <TextInputCon text={'Last name'} check={false} topheading={true} />
        <TextInputCon text={'Address'} check={false} topheading={true} />
        <TextInputCon
          text={'Appartment,suite etc'}
          check={false}
          topheading={true}
        />
        <TextInputCon text={'City'} check={false} topheading={true} />
        <TextInputCon text={'State'} check={false} topheading={true} />
        <TextInputCon
          text={'PIN code'}
          check={false}
          Last={true}
          topheading={true}
        />
        <Button TextName={'CONTINUE TO PAYMENT'} stle={20} topheading={true} />
      </ScrollView>
    </View>
  );
}
