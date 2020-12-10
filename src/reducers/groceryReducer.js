import { FETCH_GROCERIES, DELETE_GROCERY } from "../actions/types";

const initialState = []

const groceryReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_GROCERIES:
            // return [...state, ...action.payload]
            return [...action.payload]
        case DELETE_GROCERY:
            return state.filter(grocery => grocery.id !== action.payload)
        default:
            return state;
    }
}

export default groceryReducer;