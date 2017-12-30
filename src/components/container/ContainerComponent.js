import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import SidebarLeftOverlay from '../sidebar/SidebarComponent.js';

export default class ContainerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'isLoading': false,
      'results': [],
      'value': '',
    };
    this.update = this.update.bind(this);
  }

  update(e) {
    this.setState({ 'value': e.target.value });
  }


  render() {
    return (
      <div>
        <Container>
          <SidebarLeftOverlay />
        </Container>
      </div>
    );
  }
}
