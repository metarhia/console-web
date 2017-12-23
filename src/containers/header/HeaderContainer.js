import React, { Component } from 'react'
import HeaderComponent from '../../components/header/HeaderComponent'

const fetchStatistics = (callback) =>
  callback([
    { value: '2,204', label: 'Views' },
    { value: '22', label: 'Saves' }
  ]);

export default class HeaderContainer extends Component {
  state = { 
    statistics: [],
    options:[
      { name: 'insert'},
      { name: 'edit'},
      { name: 'delete'},
      { name: 'find'}
    ],
    category: {name: 'Selected category'}
  }

  componentDidMount() {
    fetchStatistics((statistics) =>
      this.setState({ statistics: statistics }));
  }

  render() {
    return <HeaderComponent
      statistics={this.state.statistics}
      options={this.state.options}
      category={this.state.category}
    />
  }
}

