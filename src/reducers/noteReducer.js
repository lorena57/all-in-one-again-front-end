import { FETCH_NOTES, NEW_NOTES} from '../actions/types';

const initialState = {
    notes: [],
    note: {},
}

const noteReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_NOTES:
            return {
                ...state,
                notes: action.payload
            };
        case NEW_NOTES:
            return {
                ...state,
                note: action.payload
            };
        default:
            return state;
    }
}

export default noteReducer;

