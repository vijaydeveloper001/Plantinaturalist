import axios from 'axios';
import {BaseUrl} from '../../Contants/apiUrl';


const create = (url, method,data) => {
  return axios.create({
    baseURL: url,
    timeout: 10000,
    method: method,
    // params:data,
    headers:{
      'Content-Type' : 'application/json',
    }
  });
};



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

// export const getApiResponseWithData = async (url, data) => {
//   console.log(url,data)
//   return  axios({
//     method: 'get',
//     url: url,
//     params: data,
//     timeout: timeout,
//     headers:{
//       'Content-Type' : 'application/json',
      
//     }
//   });
// };
export const getApiResponseWithData = async (url, data) => {
  console.log('Request URL:', url);
  console.log('Request Data:', data);
  try {
    const response = await axios.get(url,{params:data, headers: {
      'Content-Type': 'application/json;charset=utf-8',
    }})
    console.log(response)
  
    // const response = await axios({
    //   method: 'GET',
    //   baseURL: url,
    //   params: data,
    //   timeout: timeout,
    //   headers: {
    //     'Content-Type': 'application/json;charset=utf-8',
    //   },
    // });

    console.log('Response Data:', response); // Log the response data
    return response.data; // Return the actual data from the response
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Rethrow the error to handle it outside this function
  }
};


