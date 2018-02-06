import React, { Component } from 'react';
import './Searchbar.css';

export default class Searchbar extends Component {
  render() {
    return (
      <div className="sidebar-search-wrapper">
        <input
          className="sidebar-search-input"
          placeholder="Find category"
          type="text"
        />
        <span className="fa fa-search" />
      </div>
    );
  }
}
