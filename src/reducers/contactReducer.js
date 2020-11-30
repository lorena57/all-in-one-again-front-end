import { FETCH_CONTACTS, NEW_CONTACT } from '../actions/types';


const initialState = {
    notes: [],
    note: {},
    contacts: [],
    contact: {}
}

const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CONTACTS:
            return {
                ...state,
                notes: action.payload
            };
        case NEW_CONTACT:
            return {
                ...state,
                note: action.payload
            };
        default:
            return state;
    }
}

export default contactReducer;
