import { FETCH_GROCERIES } from "./types";


export const fetchGroceries = () => dispatch => {
    fetch('http://localhost:3000/api/v1/groceries')
        .then(res => res.json())
        .then(groceries => dispatch({
            type: FETCH_GROCERIES,
            payload: groceries
        }));
}