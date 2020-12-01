import { FETCH_CONTACTS } from "./types";

export const fetchContacts = () => dispatch => {
    fetch('http://localhost:3000/api/v1/contacts')
        .then(res => res.json())
        .then(contacts => dispatch({
            type: FETCH_CONTACTS,
            payload: contacts
        }));
}
