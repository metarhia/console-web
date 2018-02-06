import React, { Component } from 'react';
import SidebarLeftOverlay from '../../components/Sidebar/SidebarComponent';
import './LeftSection.css';

const filterMenuItems = (list, currentItem) => (
  list.filter(item => 
    item.name.toLowerCase().includes(currentItem.toLowerCase())
  )
)

export default class LeftSection extends Component {
  constructor(props) {
    super(props);
      this.state = {
        menuItems: [
          {id: 1, name: 'Create category', href: '#'},
          {id: 2, name: 'Servers', href: '#'},
          {id: 3, name: 'Health', href: '#'},
          {id: 4, name: 'Accounts', href: '#'},
          {id: 5, name: 'Categories', href: '#'},
          {id: 6, name: 'Articles', href: '#'},
          {id: 7, name: 'Other tools', href: '#'}
        ],
        currentMenuItem: '',
        username: 'Username',
        isLoggedIn: false
      };
      this.handleAuthClick=this.handleAuthClick.bind(this);
  }

  handleInputChange = (evt) => {
    this.setState({
      currentMenuItem: evt.target.value
    })
  }

  handleAuthClick() {
    this.setState({isLoggedIn: !this.state.isLoggedIn});
  }

  render() {
    const displayMenuItems = filterMenuItems(
      this.state.menuItems,
      this.state.currentMenuItem
    )
    return (
      <div id="left" className="column">
        <SidebarLeftOverlay
          isLoggedIn={this.state.isLoggedIn}
          username={this.state.username}
          handleAuthClick={this.handleAuthClick}
          handleInputChange={this.handleInputChange}
          currentMenuItem={this.state.currentMenuItem}
          menuItems={displayMenuItems}
        />
      </div>
    );
  }
}

