import { FETCH_CONTACTS } from "../actions/types";

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
        default:
            return state;
    }
}

export default contactReducer;

