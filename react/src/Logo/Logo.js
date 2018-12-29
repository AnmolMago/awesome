import React, { Component } from 'react';
import Colors from '../utils/Colors'
import './Logo.scss';

class Logo extends Component {

  render() {
    const style = {
      background: `linear-gradient(
        transparent ${100 - this.props.pct}%, 
        ${Colors.primary} ${100 - this.props.pct}%
      )`.replace(/\n/gm, ""),
    }
    console.log(style)
    return <div class="Logo" style={style}>
      <p>A</p>
    </div>
  }
}

export default Logo;
