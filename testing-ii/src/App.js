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
      <Dashboard 
      clickStrike={this.throwStrike}
      />
      </div>
    );
  }

  //strike is thrown
  throwStrike = () => {
    if (this.state.strikes < 2) {
      this.setState({
        strikes: this.state.strikes += 1,
        balls: this.state.balls
      })
      console.log(`Strike ${this.state.strikes}!`)
    } else {
      this.setState({
        strikes: 0,
        balls: 0
      })
      console.log('Strike 3! You\'re out!')
    }
  }

  //ball is thrown

  //foul ball

  //base hit
}

export default App;
