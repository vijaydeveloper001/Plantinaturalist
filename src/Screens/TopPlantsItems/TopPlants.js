import {
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView,
  View,
  Text,
  Pressable,
} from 'react-native';
import React from 'react';
import {PlantShop} from '../../Contants/Dummydata';
import {styles} from './styles';
import { useNavigation } from '@react-navigation/native';
import { Screens } from '../../Contants/NaivgationName';

export default function TopPlants() {
  const navigation = useNavigation()

  const renderItemFunction = ({item}) => {
    return (
      <View style={{marginRight: 10,alignItems:"center"}}>
        <Pressable style={styles.BorderLine} onPress={()=>navigation.navigate(Screens.PRODUCT)}>
          <Image source={item.img} style={styles.ImageStyle} />
        </Pressable>
        <Text style={styles.TextColor} numberOfLines={1}>
          {item.title}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        data={PlantShop}
        renderItem={renderItemFunction}
        contentContainerStyle={styles.ContentContainerStyle}
        keyExtractor={(item, index) => index}
        horizontal={true}
      />
    </SafeAreaView>
  );
}
