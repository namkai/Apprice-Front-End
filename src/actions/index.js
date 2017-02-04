import axios from 'axios';
// import {parser} from 'xml2json'
// const API_KEY = ' b2f93db72b'
const ROOT_URL = `https://appriceapi.herokuapp.com/api/products/popular`;
const SPECIFIC_URL = `https://appriceapi.herokuapp.com/api/products/search?name=`;
const GOOGLE_MAPS_GEOCODE_API = `AIzaSyDQV4GvK7esSdX_ExL9vj0lP84-22hnFAc`;
const GOOGLE_MAPS_EMBED_API = `AIzaSyBqGn70hACTBdMyntztMhqiTbH0w5Uzw38`;
const SEND_DATA = 'SEND_DATA';
const ADDRESS_TO_LAT_LONG = `https://maps.googleapis.com/maps/api/geocode/json?address=`

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
        console.log(error);
        t

    }
}
export async function sendData(props) {
    // console.log(`I'm the props`,props);
    const request = axios.post(`https://appriceapi.herokuapp.com/api/appriceme`, props)

    return request;
}

export async function getData() {
    let url = `${ROOT_URL}`
    try {
        let fetched = await fetch(url);
        let data = await fetched.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log(`I'm the GETDATA error`, error);
    }
}

export async function getMapData(selectCity) {
    let encodedLocation = encodeURIComponent(selectCity)
    console.log(encodedLocation, ADDRESS_TO_LAT_LONG, "SHOW ME STFF");
    let mapData = await fetch(`${ADDRESS_TO_LAT_LONG}${encodedLocation}`)
    mapData = await mapData.json();
    console.log(mapData, `I'm the map data, in the getMapData request`);

    return mapData
}
