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

export const getResponseonly = async (url, data) => {
    console.log(url,data,'sdgsldgksgdl');
    try {
        let response;
        if (data) {
            // If data is provided, make a GET request with parameters
            response = await axios.get(url, { params: data });
        } else {
            // If no data is provided, make a simple GET request
            response = await axios.get(url);
        }
        console.log(response.data); // Log the response data
        return response; // Return the response data
    } catch (e) {
        console.error(e, 'error'); // Log any errors that occur
        throw new Error('API response error in api.js files'); // Throw an error
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
        const response = await axios.delete(url, {data:data});
        console.log(response,'delete')
        if (response.status === 200) {
            return response
        } else {
            throw new Error('API response error: ' + response.statusText);
        }
    } catch (error) {
        console.error('Error:', error.message);
        throw error;
    }
};

