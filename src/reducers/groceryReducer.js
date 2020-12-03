import { FETCH_GROCERIES } from "../actions/types";

const initialState = {
    groceries: [],
    errors: null,
    grocery: {}
}

const groceryReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_GROCERIES:
            return {...state, errors: null, groceries: [...state.groceries, action.payload]};
            

        default:
            return state;
    }
}

export default groceryReducer;

