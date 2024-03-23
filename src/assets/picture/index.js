import Icon from 'react-native-vector-icons/FontAwesome';
export const Images = {
    nature:require('./nature.jpg'),
    heart :<Icon name="heart" size={28} />,
    search:<Icon name="search" size={20} />,
    ImageBackground:require('./ImageBackground.jpg'),
    Cart:require('./cart.png'),
    sell:require('./sell.png'),
    Flower:require('./Flower.jpg'),
    Herbs:require('./Herbs.jpg'),
    Indoor:require('./Indoor.jpg'),
    Plant:require('./Plant.jpg'),
    Vegitable:require('./Vegitables.jpg'),
    PerfumeFlower:require('./perfumeFlower.jpg'),
    back:require('./back.png'),
    Home:require('./PlantHome.jpg'),
    notification:require('./notification.png'),
    wallet:require('./wallet.png'),
    fav :require('./favourite.png'),
    notification:require('./Notificationwithtext.png'),
    notificationWithoutText:require('./notificationSimpile.png'),
    rightArrow:require('./right-arrow.png'),
    star:require('./star.png'),
    search:require('./search.png'),
    bell:require('./bell.png'),
    order:require('./order.png'),
    user:require('./user.png'),
    HomeIcon:require('./home.png'),
    shopingIcon:require('./shopping-cart.png'),
    close:require('./close.png')
}

export const AppIcon = (name,size,color) =>{
    return <Icon name={name} size={size} color = {color}  />
}