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

export const getResponseonly = async (url,data) =>{
    console.log(url,data,'sdfgh')
    try{
        let response = await axios.get(url,{params:data})
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

export const deleteResponse = async (url, data) => {
    try {
        // Make the delete request using Axios
        const response = await axios.delete(url, {data:data});

        // Check if the request was successful
        if (response.status === 200) {
            return response
            // Return the response data
            // return response.data;
        } else {
            // If the response status is not 200, throw an error
            throw new Error('API response error: ' + response.statusText);
        }
    } catch (error) {
        // Log and rethrow any errors that occur during the request
        console.error('Error:', error.message);
        throw error;
    }
};

