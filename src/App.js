import React, { Component } from "react";
import './App.css';
// import Notes from "./components/Notes";
// import NoteForm from "./components/NoteForm";
import { Provider } from "react-redux";
import store from './store'

// import Contacts from "./components/Contacts";
// import ContactForm from "./components/ContactForm";

import IntroPage from "./containers/IntroPage";



class App extends Component {
  render(){
  return (
    <Provider store={store}>
      <div className="App">

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
    </Provider>
  );
}
}

export default App;
