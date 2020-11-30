import { FETCH_NOTES, NEW_NOTES } from './types';

export const fetchNotes = () => dispatch => {
        fetch('http://localhost:3000/api/v1/notes')
        .then(res => res.json())
        .then(notes => dispatch({
            type: FETCH_NOTES,
            payload: notes
        }));
}

export const createNote = (noteData) => dispatch => {
    fetch('http://localhost:3000/api/v1/notes', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(noteData)
    })
        .then(res => res.json())
        .then(note => dispatch({
            type: NEW_NOTES,
            payload: note
        }))
};

export const fetchContacts = () => dispatch => {
    fetch('http://localhost:3000/api/v1/notes')
        .then(res => res.json())
        .then(notes => dispatch({
            type: FETCH_CONTACTS,
            payload: notes
        }));
}