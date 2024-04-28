import axios from "axios";
import { getApiResponse, getApiResponseOnly } from "./ApiHit/apiHit";

export const getResponse = async (url) =>{
    console.log(url,'sdfgh')
    try{
        let response = await getApiResponse(url)
        if (response.status == 200){
           
            return response
        }else{
            return 'Api resonse error in apit.js files'
        }
        // let res = await response 
        // console.log(res,'response')
    }catch(e){
        console.log(e,'error','Api resonse error in apit.js files')
    }
}

export const getResponseonly = async (url) =>{
    console.log(url,'sdfgh')
    try{
        let response = await axios.get(url)
        return response
        // let response = await getApiResponseOnly(url)
        // return response
        // if (response.status == 200){
           
        //     return response
        // }else{
        //     return 'Api resonse error in apit.js files'
        // }
        // let res = await response 
        // console.log(res,'response')
    }catch(e){
        console.log(e,'error','Api resonse error in apit.js files')
    }
}

export const getResponsePost = async (url,data) =>{
    console.log(url,'sdfgh')
    try{
        let response = await axios.post(url,data)
        return response
        // let response = await getApiResponseOnly(url)
        // return response
        // if (response.status == 200){
           
        //     return response
        // }else{
        //     return 'Api resonse error in apit.js files'
        // }
        // let res = await response 
        // console.log(res,'response')
    }catch(e){
        console.log(e,'error','Api resonse error in apit.js files')
    }
}