import './Keyboard.css';
import React from 'react';
import PropTypes from 'prop-types';
import Key from './Key'


class Keyboard extends React.Component {
  constructor(props) {
    super(props)
  }

  handleClick = (val) => {
    console.log(val)
    this.props.onClick(val)
  }

  render() {
    const keyList = [
      'AC', '+/-', '%', '+',
      '7', '8', '9', '-',
      '4', '5', '6', 'x',
      '1', '2', '3', '/',
      '0', '.', '=']
      const keys = keyList.map((key, idx) => {
        return (
          <Key
            onClick={()=>this.handleClick(key)}
            key={key}
            name={key}
            type={/^[\d.]$/.test(key) ? 'number' : 'operator'}
            large={idx === keyList.length - 1}
          />
        )
      })

    return (
    <div className="Keyboard">
      {keys}
    </div>)
  }
}

export default Keyboard