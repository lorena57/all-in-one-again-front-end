import { combineReducers } from 'redux';
import noteReducer from './noteReducer';
import contactReducer from './contactReducer';
import groceryReducer from './groceryReducer';




export default combineReducers({
    notes: noteReducer,
    contacts: contactReducer,
    groceries: groceryReducer,
    
  

});

