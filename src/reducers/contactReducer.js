import { FETCH_CONTACTS, NEW_CONTACTS, SET_USER } from "../actions/types";

const initialState = {
    contacts: [],
    contact: {}
}
const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CONTACTS:
            return {
                ...state,
                contacts: action.payload
            };
        case NEW_CONTACTS:
            return {
                ...state,
                contact: action.payload
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

