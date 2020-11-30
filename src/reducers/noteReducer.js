import { FETCH_NOTES, NEW_NOTES } from '../actions/types';

const initialState = {
    notes: [],
    note: {}
}

const noteReducer = (state = initialState) {
    switch(action.type) {
        case FETCH_NOTES:
            return {
                ...state,
                notes: action.payload
            }
        default:
            return state;
    }
}

export default noteReducer;