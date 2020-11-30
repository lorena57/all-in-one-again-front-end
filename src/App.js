import React, { Component } from "react";
import Notes from "./components/Notes";
import NoteForm from "./components/NoteForm";
import { Provider } from "react-redux";
import { createStore , applyMiddleware } from "redux";

const store = createStore(() => [], {}, applyMiddleware());

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
