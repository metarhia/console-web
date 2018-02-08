import React, { Component } from 'react';
import './Searchbar.css';

export default class Searchbar extends Component {
  render() {
    const handleInputChange = this.props.handleInputChange;
    const currentMenuItem = this.props.currentMenuItem;
    return (
      <div className="sidebar-search-wrapper">
        <input
          className="sidebar-search-input"
          type="text"
          placeholder="Find category"
          onChange={handleInputChange}
          value={currentMenuItem}/>
        <span className="fa fa-search"></span>
      </div>
    );
  }
}
