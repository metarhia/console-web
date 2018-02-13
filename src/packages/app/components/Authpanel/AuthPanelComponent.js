import React from 'react';
import logo from '../../../../assets/img/logo.png';
import './AuthPanel.css';

const AuthButton = ({ handleAuthClick, isLoggedIn, username }) => (isLoggedIn ? (
  <div>
    <button className='sidebar-button' onClick={handleAuthClick}>
        Sign Out
    </button>
    <span className='sidebar-username'>{username}</span>
  </div>
) : (
  <button  className='sidebar-button' onClick={handleAuthClick}>
      Sign In
  </button>
));

const AuthPanel = props => (
  <div className='sidebar-auth-panel'>
    <img className='sidebar-logo' src={logo} alt='logo'/>
    <h2 className='sidebar-title'>Metarhia</h2>
    <hr style={{
      width: '80%',
      border: '1px solid grey',
    }}/>
    <AuthButton {...props}/>
  </div>
);

export default AuthPanel;
