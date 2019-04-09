import React, { Component } from 'react';
import './App.css';

import Display from './components/Display/Display';
import Dashboard from './components/Dashboard/Dashboard';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Display />
      <Dashboard />
      </div>
    );
  }
}

export default App;
