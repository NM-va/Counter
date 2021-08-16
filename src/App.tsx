import React from "react";
import "./App.css";
import {CountSettings} from "./components/CountSettings/CountSettings";
import {CountContent} from "./components/CountContent/CountContent";


function App() {
  return (
    <div className="App">
      <CountSettings />
      <CountContent />
    </div>
  );
}

export default App;
