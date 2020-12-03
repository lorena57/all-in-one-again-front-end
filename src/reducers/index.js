import { combineReducers } from 'redux';
import noteReducer from './noteReducer';
import contactReducer from './contactReducer';


export default combineReducers({
    notes: noteReducer,
    contacts: contactReducer

});