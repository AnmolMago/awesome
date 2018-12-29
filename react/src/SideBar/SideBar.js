import React, { Component } from 'react';
import './SideBar.scss';
import { NavLink } from "react-router-dom";
import Featured from '../Featured'

import Logo from '../Logo'

class SideBar extends Component {
  render() {
    return (
      <div id="SideBar">
        <Logo pct="100" />
        <NavLink to="/products">
          <div></div>
          <h3 class="title">Products</h3>
        </NavLink>

        <NavLink to="/people">
          <div></div>
          <h3 class="title">People</h3>
        </NavLink>

        <NavLink exact to="/">
          <div></div>
          <h3 class="title">Home</h3>
        </NavLink>

        <NavLink to="/me">
          <div></div>
          <h3 class="title">You</h3>
        </NavLink>

        <Featured for="nav" />
      </div >
    );
  }
}

export default SideBar;
