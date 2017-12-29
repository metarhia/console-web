import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import Header from '../../containers/header/HeaderContainer'

export default class ContainerComponent extends Component {

  render() {
    return (
      <div>
        <Container>
          <Header/>
        </Container>
      </div>
    )
  }
}

