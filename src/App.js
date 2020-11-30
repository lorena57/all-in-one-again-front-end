import Notes from "./components/Notes";
import NoteForm from "./components/NoteForm";
import { Provider } from "react-redux";

function App() {
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

export default App;
