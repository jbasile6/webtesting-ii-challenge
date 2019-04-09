import React, { Component } from 'react';
import './App.css';

import Display from './components/Display/Display';
import Dashboard from './components/Dashboard/Dashboard';

class App extends Component {
  state = {
    strikes: 0,
    balls: 0
  }
  render() {
    return (
      <div className="App">
      <Display 
      strikes={this.state.strikes}
      balls={this.state.balls}
      />
      <Dashboard />
      </div>
    );
  }
}

export default App;
