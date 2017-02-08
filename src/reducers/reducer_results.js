import {STORE_DATA, STORE_LOCATION, STORE_USER} from '../actions/index';

const INITIAL_STATE = {
    data: {},
    location: '',
    user: {}
};

export default function(state = INITIAL_STATE, action) {
    console.log(action.payload, 'Im the action');
    switch (action.type) {
        case STORE_DATA:
            return {
                data: action.payload
            };
        case STORE_LOCATION:
            return {
                location: action.payload
            }
        case STORE_USER:
            return {
                user: action.payload
            }
        default:
            return state;
    }
}
