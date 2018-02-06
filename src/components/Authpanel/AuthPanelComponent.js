import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from '../../assets/img/logo.png';
import './AuthPanel.css';

function LoginButton(props) {
  return (
    <button  className="sidebar-button" onClick={props.onClick}>
      Sign In
    </button>
  );
}

LoginButton.propTypes = {
  onClick: PropTypes.function,
};

function LogoutButton(props) {
  return (
    <button className="sidebar-button" onClick={props.onClick}>
      Sign Out
    </button>
  );
}

LogoutButton.propTypes = {
  onClick: PropTypes.function,
};

export default class AuthPanel extends Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedIn: false };
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;

    return (
      <div className="sidebar-auth-panel">
        <img className="sidebar-logo" src={logo} alt="Logo" />
        <h2 className="sidebar-title">Metarhia</h2>
        <hr style={{
          width: '80%',
          border: '1px solid grey',
        }}
        />
        {isLoggedIn ? (
          <div>
            <LogoutButton onClick={this.handleLogoutClick} />
            <span className="sidebar-username">Username</span>
          </div>
        ) : (
          <LoginButton onClick={this.handleLoginClick} />
        )}
      </div>
    );
  }
}
