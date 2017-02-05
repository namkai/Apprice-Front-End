import {STORE_DATA} from '../actions/index';

const INITIAL_STATE = {
    data: {}
};

export default function(state = INITIAL_STATE, action) {
    console.log(action.payload, 'Im the action');
    switch (action.type) {
        case STORE_DATA:
            return {
                data: action.payload
            };
        default:
            return state;
    }
}
