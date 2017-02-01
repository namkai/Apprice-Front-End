import axios from 'axios';
// import {parser} from 'xml2json'
// const API_KEY = ' b2f93db72b'
const ROOT_URL = `https://appriceapi.herokuapp.com/api/products`
const SPECIFIC_URL = `https://appriceapi.herokuapp.com/api/products/search?name=`
// export function fetchFood() {
//     // let encodedLocation = encodeURIComponent(location);
//     let requestUrl = `${ROOT_URL}`;
//     console.log(`I'm working!`);
//     return axios.get(requestUrl).then((res) => {
//         return res;
//
//     });
//
// }

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
