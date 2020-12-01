import React, { Component } from "react";
import Notes from "./components/Notes";
import NoteForm from "./components/NoteForm";
import { Provider } from "react-redux";
import store from './store'

import Contacts from "./components/Contacts";




class App extends Component {
  render(){
  return (
    <Provider store={store}>
      <div className="App">


<hr/>
<hr/>

<Contacts/>
        <hr />
        <hr />
        <NoteForm/>
        <hr/>
        <Notes/>
      </div>
    </Provider>
  );
}
}

export default App;
