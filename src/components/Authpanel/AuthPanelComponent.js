import React from 'react';
import logo from '../../assets/img/logo.png';
import './AuthPanel.css';

const AuthPanel = () => (
  <div className='sidebar-auth-panel'>
    <img className='sidebar-logo' src={logo}/>
    <h2 className='sidebar-title'>Metarhia</h2>
    <hr style={{
      width: '80%',
      opacity: 0.4
    }}/>
    <span>Username</span>
  </div>
);

export default AuthPanel;
