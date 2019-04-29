import './Screen.css';
import React from 'react';
import PropTypes from 'prop-types';

class Screen extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (<div className="Screen">{this.props.value}</div>)
  }
}

export default Screen
