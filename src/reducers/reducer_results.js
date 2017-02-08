import {STORE_DATA, STORE_LOCATION, STORE_USER, NUMBER_STORES} from '../actions/index';

const INITIAL_STATE = {
    products: {},
    location: '',
    user: {},
    stores: 2
};

export default function(state = INITIAL_STATE, action) {
    console.log(action.payload, 'Im the action');
    switch (action.type) {
        case STORE_DATA:
            return {
                ...state,
                products: action.payload
            };
        case STORE_LOCATION:
            return {
                ...state,
                location: action.payload
            }
        case STORE_USER:
            return {
                ...state,
                user: action.payload
            }
        case NUMBER_STORES:
            return {
                ...state,
                stores: action.payload
            }
        default:
            return state;
    }
}
