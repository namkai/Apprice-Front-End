import axios from 'axios';
// import {parser} from 'xml2json'
// const API_KEY = ' b2f93db72b'
const ROOT_URL = `https://appriceapi.herokuapp.com/api/products/popular`;
const SPECIFIC_URL = `https://appriceapi.herokuapp.com/api/products/search?name=`;
const GOOGLE_MAPS_GEOCODE_API = `AIzaSyDQV4GvK7esSdX_ExL9vj0lP84-22hnFAc`;
const GOOGLE_MAPS_EMBED_API = `AIzaSyBqGn70hACTBdMyntztMhqiTbH0w5Uzw38`;
const SEND_DATA = 'SEND_DATA';

export async function fetchGenericFood() {
    let url = `${ROOT_URL}`
    try {
        let fetched = await fetch(url);
        let data = await fetched.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export async function fetchSpecificFood(food) {
    let url = `${SPECIFIC_URL}${food}`
    console.log(url);
    try {
        let fetched = await fetch(url);
        let data = await fetched.json();
        // console.log(data);
        return data;
    } catch (error) {
        console.log(error);t

    }
}
export function sendData(props) {
    const request = axios.post(`https://appriceapi.herokuapp.com/api/appriceme`, props)

    return request;
}
