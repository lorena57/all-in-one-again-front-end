import { FETCH_GROCERIES } from "../actions/types";
import _ from 'lodash';


const initialState = {
    groceries: [],
    grocery: {}
}

const groceryReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_GROCERIES:
            return {
                ...state,
                groceries: action.payload
            }
        default:
            return state;
    }
}

export default groceryReducer;