import React from 'react'
import {Grid, Image} from 'semantic-ui-react'
import logo from '../assets/img/logo.svg'

const AuthPanel = (props) => (
  <Grid celled={true|2}>
    <Grid.Row color='white' centered='true'>
      <Image src={logo} circular avatar />
      <span><h1>Metarhia</h1></span>
    </Grid.Row>
    <Grid.Row color='white' centered='true'>
      <h3>Username</h3>
    </Grid.Row>
  </Grid>
)

export default AuthPanel
