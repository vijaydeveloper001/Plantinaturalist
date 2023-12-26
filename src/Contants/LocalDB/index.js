import AsyncStorage from "@react-native-async-storage/async-storage";

export const KeyLogin = 'KeyLogin'

export const setItem = async (key,data) =>{
    try{
        let storedData = await AsyncStorage.setItem(key,JSON.stringify(data))
        console.log(storedData,'stored data')
    }
    catch(e){
        console.log(e,'not store data')
    }
}


export const getItem  = async (key) =>{
    try{
        let data = await AsyncStorage.getItem(key)
       
        return data
    }
    catch(e){
        console.log(e,'not get data ')
    }
}


export const LocalDBRemove  = async (key) =>{
    try{
        let data = await AsyncStorage.removeItem(key)
       
        return data
    }
    catch(e){
        console.log(e,'not get data ')
    }
}