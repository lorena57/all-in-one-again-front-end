import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Nav from './components/Nav';
import HomePage from './components/HomePage';

import Contacts from "./containers/Contacts";
import ContactForm from "./components/ContactForm";


import GroceryIndex from "./components/GroceryIndex";

import GroceryNew from './components/GroceryNew';


// import NoteUpdate from "./components/NoteUpdate";



import Notes from './containers/Notes';
import NoteForm from './components/NoteForm'

class App extends Component {
  render() {
    return (
      <div>

        <GroceryIndex />
   
        <Nav />
        <Switch>

          {/* <NoteUpdate/> */}


          <Route exact path='/' component={HomePage} />
          <Route path='/contacts/new' component={ContactForm} />
          <Route path='/contacts' component={Contacts} />
          <Route path='/grocery/new' component={GroceryNew} />
          <Route path='/notes' component={Notes} />
          <Route path='/notes/new' component={NoteForm} />
          

       
        </Switch>

      </div>
    )
  }
}

export default App;
