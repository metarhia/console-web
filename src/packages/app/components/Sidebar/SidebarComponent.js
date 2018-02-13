import React from 'react';
import AuthPanel from '../Authpanel/AuthPanelComponent.js';
import Searchbar from '../Searchbar/SearchbarComponent.js';
import './Sidebar.css';

const MenuItem = ({ id, name, href }) => (
  <a href={href}>
    {name}
  </a>
);

const SidebarLeftOverlay = props => (
  <div className="sidenav">
    <AuthPanel
      handleAuthClick={props.handleAuthClick}
      isLoggedIn={props.isLoggedIn}
      username={props.username}
    />
    <Searchbar
      handleInputChange={props.handleInputChange}
      currentMenuItem={props.currentMenuItem}/>
    <div className="sidebar-menu">
      {props.menuItems.map(item => <MenuItem key={item.id} {...item}/>
      )}
    </div>
  </div>
);

export default SidebarLeftOverlay;
