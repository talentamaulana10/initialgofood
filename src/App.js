import React, { Component } from 'react';
import Header from './components/header/header';
import Gojek from './components/gojek/gojek';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Gojek />
      </div>
    );
  }
}

export default App;
