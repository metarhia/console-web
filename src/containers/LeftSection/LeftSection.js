import React, { Component } from 'react';
import SidebarLeftOverlay from '../../components/Sidebar/SidebarComponent';
import './LeftSection.css';

export default class LeftSection extends Component {
  render() {
    return (
      <div id="left" className="column">
        <SidebarLeftOverlay />
      </div>
    );
  }
}

