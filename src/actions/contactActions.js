import { FETCH_CONTACTS, NEW_CONTACTS } from "./types";

export const fetchContacts = () => dispatch => {
    fetch('http://localhost:3000/api/v1/contacts')
        .then(res => res.json())
        .then(contacts => dispatch({
            type: FETCH_CONTACTS,
            payload: contacts
        }));
}

export const createContact = (contactData) => dispatch => {
  
    fetch('http://localhost:3000/api/v1/contacts', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(contactData)
    })
        .then(res => res.json())
        .then(contact => dispatch({
            type: NEW_CONTACTS,
            payload: contact
            })
            );
};
