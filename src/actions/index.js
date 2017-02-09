import axios from 'axios';
const ROOT_URL = `https://appriceapi.herokuapp.com/api/products/popular`;
const SPECIFIC_URL = `https://appriceapi.herokuapp.com/api/products/search?name=`;
const GOOGLE_MAPS_GEOCODE_API = `AIzaSyDQV4GvK7esSdX_ExL9vj0lP84-22hnFAc`;
const GOOGLE_MAPS_EMBED_API = `AIzaSyBqGn70hACTBdMyntztMhqiTbH0w5Uzw38`;
const ADDRESS_TO_LAT_LONG = `https://maps.googleapis.com/maps/api/geocode/json?address=`
export const STORE_DATA = 'STORE_DATA';
export const SEND_DATA = 'SEND_DATA';
export const STORE_LOCATION = 'STORE_LOCATION';
export const STORE_USER = 'STORE_USER';
export const NUMBER_STORES = 'NUMBER_STORES';
export const SAVE_LIST = 'SAVE_LIST';
export const ONE_STORE = 'SWITCH_STORE';

export async function fetchGenericFood() {
    let url = `${ROOT_URL}`
    try {
        let fetched = await fetch(url);
        let data = await fetched.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

export async function fetchSpecificFood(food) {
    let nameUrl = `${SPECIFIC_URL}${food}`
    console.log(url);
    try {
        let fetched = await fetch(url);
        let data = await fetched.json();

        return data;
    } catch (error) {
        console.log(error);
        t

    }
}
export async function sendData(props) {

    const request = await axios.post(`https://appriceapi.herokuapp.com/api/appriceme`, props)
    const convertedRequest = await axios.post('https://appriceapi.herokuapp.com/api/appriceme/convert', request)
    return convertedRequest;
}
export function oneStore(oneStore) {
    console.log(`I was hit and i'mt he onestore action`, oneStore);
    return {
        type: ONE_STORE,
        payload: oneStore
    }
}

export async function getData() {
    let url = `${ROOT_URL}`
    try {
        let fetched = await fetch(url);
        let data = await fetched.json();

        return data;
    } catch (error) {
        console.log(`I'm the GETDATA error`, error);
    }
}

export async function getMapData(selectCity) {
    let encodedLocation = encodeURIComponent(selectCity)
    let mapData = await fetch(`${ADDRESS_TO_LAT_LONG}${encodedLocation}`)
    mapData = await mapData.json();

    return mapData
}

export function storeData(data) {
    // console.log(`i'm the data getting passed to the action`, data.data);
    let resultData = data.data;
    return {
        type: STORE_DATA,
        payload: resultData
    }
}

export function storeLocation(location) {
    console.log(`I was hit! Here's the lcoation`, location);
    return {
        type: STORE_LOCATION,
        payload: location
    }
}
export function signUp(props) {
    // console.log(`I was hit! and here are the`, props);
    const request = axios.post(`https://appriceapi.herokuapp.com/api/users/register`, props)
    // console.log(request);
    return request;
}
export function login(props) {
    // console.log(props);
    const request = axios.post('https://appriceapi.herokuapp.com/api/users/login', props)
    // console.log(request);
    return {
        type: STORE_USER,
        payload: request
    }
}

export function numOfStores(stores) {
    console.log(stores, `I'm the stores action!`);
    return {
        type: NUMBER_STORES,
        payload: stores
    }
}

export function saveList(props) {
    return {
        type: SAVE_LIST,
        payload: props
    }
}
