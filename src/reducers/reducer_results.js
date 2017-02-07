import {STORE_DATA, STORE_LOCATION} from '../actions/index';

const INITIAL_STATE = {
    data: {},
    location: ''
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
        default:
            return state;
    }
}
