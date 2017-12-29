import React, { Component } from 'react'
import HeaderComponent from '../../components/header/HeaderComponent'

const fetchStatistics = (callback) =>
  callback([
    { value: 'none', label: 'Statistics' },
    { value: '0.0.1', label: 'version' }
  ]);

export default class HeaderContainer extends Component {
  state = {
    statistics: [],
    currentOption: '',
    category: {name: 'Category name'}
  }

  componentDidMount() {
    fetchStatistics((statistics) =>
      this.setState({ statistics: statistics }));
  }

  handleItemClick = (e, { name }) => this.setState({ currentOption: name })

  render() {
    return <HeaderComponent
      statistics={this.state.statistics}
      currentOption={this.state.currentOption}
      category={this.state.category}
      handleItemClick={this.handleItemClick}
    />
  }
}

