import {
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView,
  View,
  Text,
} from 'react-native';
import React from 'react';
import {PlantShop} from '../../Contants/Dummydata';
import {styles} from './styles';

export default function TopPlants() {
  const renderItemFunction = ({item}) => {
    return (
      <View style={{marginRight: 10}}>
        <View style={styles.BorderLine}>
          <TouchableOpacity>
            <Image source={item.img} style={styles.ImageStyle} />
          </TouchableOpacity>
        </View>
        <Text style={styles.TextColor} numberOfLines={1}>{item.title}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style = {{flex:1}}>
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
