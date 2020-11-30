import { FETCH_NOTES, NEW_NOTES } from './types';

export const fetchNotes = () => dispatch => {
   
        fetch('http://localhost:3000/api/v1/notes')
        .then(res => res.json())
        .then(data => dispatch({
            type: FETCH_NOTES,
            payload: notes
        }));
    
}