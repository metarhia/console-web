import React, { Component } from 'react'
import { Header, Button, Statistic, Segment } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import './Header.css'

export default class HeaderComponent extends Component {

  render() {
    return (
      <Header className='Header' attached='top' textAlign='center'>
        <Header textAlign='left' as='h3'>
          {this.props.category.name}
          {this.props.statistics.map((statistic) => (
            <Statistic floated='right' size='tiny' text>
              <Statistic.Value>{statistic.value}</Statistic.Value>
              <Statistic.Label>{statistic.label}</Statistic.Label>
            </Statistic>
          ))}
        </Header>
      <Button.Group>
        {this.props.options.map((option) => (
          <Button content={option.name}/>
        ))}
      </Button.Group>
      </Header>
    )
  }
}

