import { FlatList,Image, TouchableOpacity, SafeAreaView} from 'react-native'
import React from 'react'
import { PlantShop } from '../../Contants/Dummydata'
import { styles } from './styles'

export default function TopPlants() {
    const renderItemFunction = ({ item }) => {
        return (
            <TouchableOpacity>
                <Image source={item.img} style={styles.ImageStyle} />
            </TouchableOpacity>
        );
    };

    return (
        <SafeAreaView>
        <FlatList
            data={PlantShop}
            renderItem={renderItemFunction}
            contentContainerStyle={styles.ContentContainerStyle}
            keyExtractor={(item,index) => index}
        />
        </SafeAreaView>
    );
}
