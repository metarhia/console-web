import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import logo from '../../assets/img/logo.png';

const AuthPanel = () => (
  <Grid celled={true | 2}>
    <Grid.Row color='white' centered='false'>
      <Image src={logo} circular />
      <span><h1>Metarhia</h1></span>
    </Grid.Row>
    <hr width='40%'/>
    <Grid.Row color='white' centered='true'>
      <h3>Username</h3>
    </Grid.Row>
    <hr width='100%'/>
  </Grid>
);

export default AuthPanel;
