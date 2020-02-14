import React from 'react';
import logo from './logo.svg';
import './App.css';
import Posts from "./components/Posts";
import Form from "./components/Form";
import {Provider} from "react-redux";
import Store from "./Store";

function App() {

  return (
    <Provider store={Store}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Form />
        <br/>
        <Posts />
      </header>
    </div>
    </Provider>
  );
}

export default App;
