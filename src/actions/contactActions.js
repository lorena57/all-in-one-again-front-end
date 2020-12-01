import { FETCH_CONTACTS, SET_USER } from './types';

export const fetchContacts = () => dispatch => {
    fetch('http://localhost:3000/api/v1/notes')
        .then(res => res.json())
        .then(contacts => dispatch({
            type: FETCH_CONTACTS,
            payload: contacts
        }));
}

export const setUser = userId => {
    return {
        type: 'SET_USER',
        payload: userId
    }
} 