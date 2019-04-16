import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';

import App from './App';
import Display from './components/Display/Display';
import Dashboard from './components/Dashboard/Dashboard';

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders successfully', () => {
    render(<App />);
  });

  it('adds a strike to the count', () => {
    const { getByText } = render(<App />);
    const button = getByText('Strike');
    fireEvent.click(button);
    getByText('1');
  })

  it('resets count on 3 strikes', () => {
    const { getByText } = render(<App />);
    const button = getByText('Strike');
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    getByText('0');
  })

  it('adds a ball to the count', () => {
    const { getByText } = render(<App />);
    const button = getByText('Ball');
    fireEvent.click(button);
    getByText('1');
  })

  it('resets count on 4 balls', () => {
    const { getByText } = render(<App />);
    const button = getByText('Ball');
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    getByText('0');
  })

  it('adds a strike to the count on foul balls', () => {
    const { getByText } = render(<App />);
    const button = getByText('Foul Ball');
    fireEvent.click(button);
    getByText('1');
  })

  it('count remains at 2 strikes on foul balls', () => {
    const { getByText } = render(<App />);
    const button = getByText('Foul Ball');
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    getByText('2');
  })

  it('hit results in count resetting', () => {
    const { getByText } = render(<App />);
    const button = getByText('Hit');
    fireEvent.click(button);
    getByText('0');
  })
  
})
