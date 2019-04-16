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
      clickBall={this.throwBall}
      clickFoul={this.foulBall}
      clickHit={this.baseHit}
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
      window.alert('Strike 3! You\'re out!')
    }
  }

  //ball is thrown
  throwBall = () => {
    if (this.state.balls < 3) {
      this.setState({
        strikes: this.state.strikes,
        balls: this.state.balls += 1
      })
      console.log(`Ball ${this.state.balls}!`)
    } else {
      this.setState({
        strikes: 0,
        balls: 0
      })
      console.log('Ball 4! Take your base!')
      window.alert('Ball 4! Take your base!')
    }
  }

  //foul ball
  foulBall = () => {
    if (this.state.strikes < 2) {
      this.setState({
        strikes: this.state.strikes += 1,
        balls: this.state.balls
      })
      console.log(`Foul Ball! The count is now ${this.state.balls}-${this.state.strikes}.`)
    } else {
      console.log(`Foul Ball! The count remains ${this.state.balls}-${this.state.strikes}.`)
      window.alert(`Foul Ball! The count remains ${this.state.balls}-${this.state.strikes}.`)
    }
  }

  //base hit
  baseHit = () => {
    this.setState({
      strikes: 0,
      balls: 0
    })
    console.log('Base Hit! A new batter is up to the plate.')
    window.alert('Base Hit! A new batter is up to the plate.')
  }
}

export default App;
