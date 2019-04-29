import React from 'react';
import Keyboard from './component/Keyboard'
import Screen from './component/Screen';
import './App.css';
import { calc } from './util/calculate'

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      result: 0,
      operator: null,
      next: null
    }
  }

  handleClick = (val) => {
    this.setState(calc(this.state, val))
  }

  render() {
    return (
      <div className="App">
        <Screen value={this.state.next || this.state.result || '0'} />
        <Keyboard onClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
