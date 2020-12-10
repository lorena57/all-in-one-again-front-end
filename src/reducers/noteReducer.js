import { FETCH_NOTES } from '../actions/types';

const initialState = []

const noteReducer = (state = initialState, action) => {
    // the (action.type) is the case
    switch (action.type) {
        case FETCH_NOTES:
            // return [...state, ...action.payload]
            return [...action.payload]
        default:
            return state;
    }
}

export default noteReducer;
