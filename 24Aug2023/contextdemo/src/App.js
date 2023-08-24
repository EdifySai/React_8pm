import logo from './logo.svg';
import './App.css';

import { createContext } from 'react';
import Component1 from './Component1';
export var Context = createContext();

function App() {
  return (
    <div className="App">
      <h1>App Component!</h1>

      <Context.Provider value={"hello"}>
        <Component1></Component1>
      </Context.Provider>

    </div>
  );
}

export default App;
