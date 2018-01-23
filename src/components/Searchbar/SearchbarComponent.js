import React, {Component} from 'react'
import './Searchbar.css';

export default class Searchbar extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="sidebar-search-wrapper">
        <input
          className="sidebar-search-input"
          placeholder="Find category"
          type="text"/>
        <span className="fa fa-search"></span>
      </div>
    )
  }
}

