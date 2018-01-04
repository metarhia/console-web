import React from 'react';
import AuthPanel from '../Authpanel/AuthPanelComponent.js';
import Searchbar from '../Searchbar/SearchbarComponent.js';
import './Sidebar.css';

const SidebarLeftOverlay = () => (
  <div className="sidenav">
    <AuthPanel/>
    <Searchbar/>
    <div className="sidebar-menu">
      <a href="#">Create category</a>
      <a href="#">Servers</a>
      <a href="#">Health</a>
      <a href="#">Accounts</a>
      <a href="#">Categories</a>
      <a href="#">Articles</a>
      <a href="#">Other tools</a>
    </div>
  </div>
);

export default SidebarLeftOverlay;
