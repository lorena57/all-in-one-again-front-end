import { FETCH_GROCERIES, DELETE_GROCERY } from './types';

export const fetchGroceries = () => dispatch => {
    fetch('http://localhost:3000/api/v1/groceries')
        .then(res => res.json())
        .then(groceries => dispatch({
            type: FETCH_GROCERIES,
            payload: groceries
        }));
}
export const deleteGrocery = (groceryId) => dispatch => {
    fetch(`http://localhost:3000/api/v1/groceries/${groceryId}`, {
        method: 'DELETE'
    })
        .then(res => res.json())
        .then(groceries => dispatch({
            type: DELETE_GROCERY,
            payload: groceryId
        }));
}