import React, { Component } from 'react';

import Nav from './components/Nav';
// import IntroSection from './components/IntroSection';
// import ContactForm from "./components/ContactForm";
import Contacts from "./components/Contacts";
import CardSection from './components/CardSection'
import IntroPage from './containers/IntroPage'

import { Route, Switch } from 'react-router-dom'



class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        {/* <IntroPage /> */}
        {/* <CardSection /> */}

    
        
        {/* <ContactForm />
        <Contacts /> */}

        <Switch>
          <Route exact path='/' component={IntroPage} />
          <Route path='/contacts' component={Contacts} />
        </Switch>

      </div>
    )
  }
}

export default App;
