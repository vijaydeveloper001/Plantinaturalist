import Icon from 'react-native-vector-icons/FontAwesome';
export const Images = {
    nature:require('./nature.jpg'),
    heart :<Icon name="heart" size={28}  />,
    search:<Icon name="search" size={20}  />,
    ImageBackground:require('./ImageBackground.jpg'),
    Cart:require('./cart.png'),
    sell:require('./sell.png'),
    Flower:require('./Flower.jpg'),
    Herbs:require('./Herbs.jpg'),
    Indoor:require('./Indoor.jpg'),
    Plant:require('./Plant.jpg'),
    Vegitable:require('./Vegitables.jpg'),
    PerfumeFlower:require('./perfumeFlower.jpg'),
}

export const AppIcon = (name,size,color) =>{
    return <Icon name={name} size={size} color = {color}  />
}