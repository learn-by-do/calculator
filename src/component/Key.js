import './Key.css'
import React from 'react';
import PropTypes from 'prop-types';

class Key extends React.Component{
  constructor(props) {
    super(props)
  }

  render() {
    const className = ['flex-center', 'Key',this.props.type, this.props.large?'large':'']
    return (
      <button onClick={this.props.onClick}className={className.join(' ').trim()}>{this.props.name}</button>
    )
  }
}

Key.propTypes = {
  name: PropTypes.string,
  large: PropTypes.bool,
  type: PropTypes.string
}

export default Key