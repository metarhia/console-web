import React, { Component } from 'react';
import './Header.css';

export default class HeaderComponent extends Component {
  render() {
    return (
      <div className="top-right">
        <div className="header-top-section">
          <span className="header-category-name">CATEGORY NAME</span>
          <span className="header-statistics">Statistics, versions</span>
        </div>
        <div>
          <nav>
            <a href="">Insert</a>
            <a href="">Edit</a>
            <a href="">Delete</a>
            <a href="">Find</a>
            <a href="">Etc</a>
          </nav>
        </div>
      </div>
    );
  }
}
