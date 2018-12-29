import React, { Component } from 'react';
import './Featured.scss';

class Featured extends Component {
  render() {
    return (
      <div id="Featured">
        <h3>Featured</h3>
        <a href="people" class="feat_user"> <img alt="" /> <span>Autumn</span> </a>
        <a href="people" class="feat_user"> <img alt="" /> <span>Jennifer</span> </a>
        <a href="people" class="feat_user"> <img alt="" /> <span>Andy</span> </a>
        <a href="people" class="feat_user"> <img alt="" /> <span>Amy</span> </a>
        <a href="people" class="feat_user"> <img alt="" /> <span>Mike</span> </a>
        <a href="people" class="feat_user"> <img alt="" /> <span>Lisa</span> </a>
      </div>
    );
  }
}

export default Featured;
