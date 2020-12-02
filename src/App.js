import React, { Component } from 'react';
import Nav from './components/Nav';
import Contacts from "./containers/Contacts";
import ContactForm from "./components/ContactForm";

import IntroPage from './components/HomePage';
import { Route, Switch } from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Switch>
          <Route exact path='/' component={IntroPage} />
          <Route path='/contacts/new' component={ContactForm} />
          <Route path='/contacts' component={Contacts} />
       
        </Switch>

      </div>
    )
  }
}

export default App;
