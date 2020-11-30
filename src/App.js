import React, { Component } from "react";
import Notes from "./components/Notes";
import NoteForm from "./components/NoteForm";
import { Provider } from "react-redux";
import store from './store'



class App extends Component {
  render(){
  return (
    <Provider store={store}>
      <div className="App">
        <NoteForm/>
        <hr/>
        <Notes/>
      </div>
    </Provider>
  );
}
}

export default App;
