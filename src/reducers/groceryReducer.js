import { FETCH_GROCERIES } from "../actions/types";
import _ from 'lodash';


const initialState = {
    groceries: [],
    grocery: {}
}

const groceryReducer = (state = initialState, action) => {
    switch (action.type) {
    case FETCH_GROCERIES:
        return _.mapKeys(action.payload.data, 'id');
    default: 
    return state;        
    }
}

export default groceryReducer;