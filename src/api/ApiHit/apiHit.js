import axios from 'axios';
import {BaseUrl} from '../../Contants/apiUrl';

// const getApi = (incre) => axios({
//     method:'get',
//     url:`https://perenual.com/api/species-list?key=sk-yAZr6593fe64a6b151226&page=${1}`,
//     timeout:600,
// })

// export const apiResponse = async (inre) =>{
//     let response = await getApi(inre)
//     console.log(JSON.stringify(response?.data))
//     if (response.status == 200) {
//         return JSON.stringify(response?.data)
//     }
//     else  {
//         console.log(response.status)
//         return 'App error'
//     }
// }
const timeout = 2000;
export const getApiResponse = async url => {
  console.log(url, 'axios method');
  return axios({
    method: 'GET',
    url: BaseUrl + url,
    timeout: timeout,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
export const getApiResponseOnly = async url => {
  console.log(url, 'axios method');
  return axios({
    method: 'GET',
    url: url,
    timeout: timeout,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const getApiResponseWithData = async (url, data) => {
  return  axios({
    method: 'GET',
    url: url,
    data: data,
    timeout: timeout,
    headers:{
      "Content-Type" : "application/json"
    }
  });
};
