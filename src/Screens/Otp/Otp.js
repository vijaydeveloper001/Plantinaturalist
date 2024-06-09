import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React, { useEffect,useState } from 'react';
import Headers from '../../Common/Headers/Headers';
import Button from '../../Common/Button';

export default function Otp() {
    const [start, setstart] = useState(false)
    const [second, setsecond] = useState(59)
    useEffect(() => {
        let timer;
        if (start && second !== 0) {
            timer = setTimeout(() => {
                setsecond((prev) => prev - 1);
            }, 1000); 
        } else if (start && second === 0) {
            setsecond(59);
            setstart(false);
        }
        
        return () => clearTimeout(timer)
    }, [start, second]);
  return (
    <View style={styles.main}>
      <StatusBar backgroundColor={'#f2f2f0'} barStyle={'dark-content'} />
      <Headers text={'Otp'} />
      <View style = {{flex:1,marginHorizontal:20}}>
      <Text style={styles.text}>Wait for time 0:{second}</Text>
     
      <Button TextName={'Verify'} style={{marginHorizontal:0,marginTop:20}} press={()=>setstart(true)}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#f2f2f0',
    
  },
  text: {
    color: '#000',
    
  },
});
