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

        // case NEW_NOTES:
        //     return {
        //         ...state,
        //         note: action.payload
        //     };


        // import { FETCH_NOTES, NEW_NOTES } 

// const initialState = {
//     notes: [],
//     note: {},
// }