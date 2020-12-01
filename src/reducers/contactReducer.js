import { FETCH_CONTACTS, NEW_CONTACT, SET_USER } from '../actions/types';


const initialState = {
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
        case SET_USER:
            return {
                ...state,
                userId: action.payload
            };

        default:
            return state;
    }
}

export default contactReducer;
