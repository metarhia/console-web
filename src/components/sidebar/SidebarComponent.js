import React from 'react';
import { Sidebar, List } from 'semantic-ui-react';
import AuthPanel from '../authPanel/AuthPanelComponent.js';
import Searchbar from '../searchbar/SearchbarComponent.js';
import '../../styles/App.css';

const SidebarLeftOverlay = () => (
  <div>
    <Sidebar icon='labeled' visible='true' vertical inverted>
      <AuthPanel />
      <Searchbar />
      <List>
        <List.Item content={<a href='#'><h3>Create category</h3></a>} />
        <List.Item content={<a href='#'><h3>Servers</h3></a>} />
        <List.Item content={<a href='#'><h3>Health</h3></a>} />
        <List.Item content={<a href='#'><h3>Accounts</h3></a>} />
        <List.Item content={<a href='#'><h3>Categories</h3></a>} />
        <List.Item content={<a href='#'><h3>Articles</h3></a>} />
        <List.Item content={<a href='#'><h3>Other tools and settings</h3></a>}/>
      </List>
    </Sidebar>
  </div>
);

export default SidebarLeftOverlay;
