import React, { Component } from 'react'
import { Search } from 'semantic-ui-react'

export default class Searchbar extends Component {
  constructor(){
    super();
    this.state = {
      isLoading : false,
      results : [],
      value : ''
    }
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  componentWillMount() {
    this.resetComponent()
  }

  resetComponent = () => this.setState(
    { isLoading: false, results: [], value: '' }
  )

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value })

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent()

      this.setState({
        isLoading: false,
        value
      })
    }, 50)
  }

  render() {
    const { isLoading, value, results } = this.state

    return (
      <center>
        <Search
          placeholder ='Input search text'
          loading={isLoading}
          onSearchChange={this.handleSearchChange}
          results={results}
          value={value}
          {...this.props}
        />
      </center>
    )
  }
}
