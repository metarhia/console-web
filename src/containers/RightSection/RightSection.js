import React, { Component } from 'react';
import HeaderComponent from '../../components/Header/HeaderComponent';
import TableComponent from '../../components/Table/TableComponent';
import './RightSection.css';

export default class RightSection extends Component {
  render() {
    return (
      <div id="right" className="column">
        <HeaderComponent />
        <TableComponent />
      </div>
    );
  }
}

