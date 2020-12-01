import React, { Component } from "react";
import './App.css';

// import { Route } from 'react-router-dom'


// import Notes from "./components/Notes";
// import NoteForm from "./components/NoteForm";


import Nav from './components/Nav';


import Contacts from "./components/Contacts";
import ContactForm from "./components/ContactForm";

import IntroPage from "./containers/IntroPage";



class App extends Component {
  render(){
  return (
   
      <div className="App">

        {/* <Switch>

        </Switch> */}


        <Nav />

      <ContactForm />
        <Contacts />

        <IntroPage/>

  


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
