import { combineReducers } from 'redux';
import noteReducer from './noteReducer';
import contactReducer from './contactReducer';
import groceryReducer from './groceryReducer';

export default combineReducers({
    //Keys the key is the mapStateToProps share the same key
    notes: noteReducer,
    contacts: contactReducer,
    groceries: groceryReducer,
});

