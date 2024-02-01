import { getApiResponse } from "./ApiHit/apiHit";

export const getResponse = async (url) =>{
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