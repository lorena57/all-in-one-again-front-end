import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import Contacts from "./containers/Contacts";
import ContactForm from "./components/ContactForm";
import HomePage from './components/HomePage';
import Notes from './containers/Notes'
import NoteForm from './components/NoteForm'

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/contacts/new' component={ContactForm} />
          <Route path='/contacts' component={Contacts} />

          <Route path='/notes/new' component={NoteForm} />
          <Route path='/notes' component={Notes} />

       
        </Switch>

      </div>
    )
  }
}

export default App;
