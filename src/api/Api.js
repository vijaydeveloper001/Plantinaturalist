import axios from 'axios';
import {getApiResponse, getApiResponseOnly} from './ApiHit/apiHit';

export const getResponsePost = async (url, data) => {
  console.log(url, 'sdfgh');
  try {
    let response = await axios.post(url, data);
    return response;
    // let response = await getApiResponseOnly(url)
    // return response
    // if (response.status == 200){

    //     return response
    // }else{
    //     return 'Api resonse error in apit.js files'
    // }
    // let res = await response
    // console.log(res,'response')
  } catch (e) {
    console.log(e, 'error', 'Api resonse error in apit.js files');
  }
};
export const deleteResponse = async (url, data) => {
  console.log(url, data);
  try {
    // Method 1: Sending data in the request body (as you have)
    const response = await axios.delete(url, {
      data: data,
      headers: {
        'content-type': 'application/json',
      },
    });

    // If your server expects data as query parameters, you can try this:
    // const params = new URLSearchParams(data).toString();
    // const response = await axios.delete(`${url}?${params}`);

    console.log(response, 'delete');
    if (response.status === 200) {
      return response;
    } else {
      throw new Error('API response error: ' + response.statusText);
    }
  } catch (error) {
    console.error('Error:', error.message);
    // Additional debugging information
    if (error.response) {
      console.error('Response data:', error.response.data);
      console.error('Response status:', error.response.status);
      console.error('Response headers:', error.response.headers);
    }
    throw error;
  }
};

export const getResponse = async url => {
  console.log(url, 'sdfgh');
  try {
    let response = await getApiResponse(url);
    if (response.status == 200) {
      return response;
    } else {
      return 'Api resonse error in apit.js files';
    }
    // let res = await response
    // console.log(res,'response')
  } catch (e) {
    console.log(e, 'error', 'Api resonse error in apit.js files');
  }
};

export const getResponseonly = async url => {
  console.log(url, 'sdgsldgksgdl');
  try {
    let response = await axios.get(url);
    return response; // Return the response data
  } catch (e) {
    console.error(e, 'error'); // Log any errors that occur
    throw new Error('API response error in api.js files'); // Throw an error
  }
};

export const getResponseonlyPut = async (url, data) => {
    console.log('Request URL:', url);
    console.log('Request Data:', data);
    try {
      const response = await axios.put(url, data);
      console.log('Response:', response.data); // Log the response data
      return response; // Return the response data
    } catch (e) {
     console.log('API response error in api.js files')
    //   throw new Error('API response error in api.js files');
    }
  };
