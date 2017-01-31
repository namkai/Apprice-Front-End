import axios from 'axios';

const API_KEY = ' b2f93db72b'
const ROOT_URL =
`http://www.SupermarketAPI.com/api.asmx/SearchByProductName?APIKEY=b2f93db72b&ItemName=milk`

export function fetchFood(location) {
        // let encodedLocation = encodeURIComponent(location);
        let requestUrl = `${ROOT_URL}`;

        return axios.get(requestUrl).then((res) => {
                console.log(res);
                return res

        });

    }
