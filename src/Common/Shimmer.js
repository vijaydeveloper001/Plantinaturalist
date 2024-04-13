import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
export default function ProductDetail({isVisible}) {
  const renderItem = ({item}) => {
    return (
      <View style={styles.MainCon}>
        <ShimmerPlaceHolder
          LinearGradient={LinearGradient}
          style={{width: 185, height: '100%'}}
          autoRun>
          <Text>hello</Text>
        </ShimmerPlaceHolder>
      </View>
    );
  };
  return (
    <View style={styles.Main}>
      <FlatList
        data={[0, 1, 2, 3, 4, 5, 5, 6]}
        renderItem={renderItem}
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        contentContainerStyle={{paddingHorizontal: 20, paddingBottom: 40}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  Main: {
    flex: 1,
  },
  MainCon: {
    marginTop: 20,
    height: 250,
  },
});
