import React, { Component } from 'react';
// import { Route, Switch } from 'react-router-dom';


import './App.css';





import Notes from "./components/Notes";
import NoteForm from "./components/NoteForm";


// import Nav from './components/Nav';
// import Contacts from "./components/Contacts";
// import ContactForm from "./components/ContactForm";
// import IntroPage from "./containers/IntroPage";



class App extends Component {
  render() {
    return (
   
      <div className="App">

        <NoteForm />
        <Notes />

        {/* <Contacts />
        <ContactForm /> */}
      {/* <Switch> */}
        {/* <Route exact path='/' component={IntroPage} /> */}
        {/* <Route path='/grocery' component={GroceryForm} /> */}
        {/* <Route path='/note' component={NotePage} /> */}
        {/* <Route path='/contact' component={Contacts} />
      </Switch>


        <Nav />

      <ContactForm />
        // <Contacts />

        <IntroPage/> */}

  


          {/* <hr/>
          <hr/>
          <ContactForm/>
          <Contacts/>
          <hr />
          <hr />
          <NoteForm/>
          <hr/>
          <Notes/> */}

      </div>
  
  );
}
}

export default App;
