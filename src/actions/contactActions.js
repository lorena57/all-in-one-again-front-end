import { FETCH_CONTACTS, NEW_CONTACTS } from "./types";

export const fetchNotes = () => dispatch => {
    fetch('http://localhost:3000/api/v1/notes')
        .then(res => res.json())
        .then(contacts => dispatch({
            type: FETCH_CONTACTS,
            payload: contacts
        }));
}
