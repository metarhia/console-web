import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Header, Menu, Statistic, Grid } from 'semantic-ui-react'
import './Header.css'

export default class HeaderComponent extends Component {
  render() {
    const { category } = this.props;
    const { statistics } = this.props;
    const { currentOption } = this.props;
    const { handleItemClick } = this.props;
    const style = {
      font: {
        fontFamily: 'pt_sansregular',
        fontSize: '0.9rem',
        fontWeight: 'normal',
        textTransform: 'none'
      }
    };
    return (
      <Grid
        columns='equal'
        verticalAlign='middle'
        style={{ border: '1.5px solid black'}}
      >
        <Grid.Row style={{ padding:'0.5rem' }}>
          <Grid.Column width={4}>
            <Header
              content={category.name}
              style={style.font}
            />
          </Grid.Column>
          <Grid.Column>
            <Statistic.Group style={{ margin: '0 0.5em' }}>
            {statistics.map((statistic) => (
              <Statistic size='mini' style={{ margin: '0 0.5em' }}>
                <Statistic.Value>
                  {statistic.value}
                </Statistic.Value>
                <Statistic.Label style={style.font}>
                  {statistic.label}
                </Statistic.Label>
              </Statistic>
            ))}
            </Statistic.Group>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row style={{ padding:'0.5rem' }}>
          <Menu
            compact
            style={{ border: 'none', boxShadow: 'none', fontSize: '0.9em' }}
          >
            <Menu.Item
              name='insert'
              style={{ borderRight: '1px solid black' }}
              active={currentOption === 'insert'}
              onClick={handleItemClick}
            />
            <Menu.Item
              name='edit'
              style={{ borderRight: '1px solid black' }}
              active={currentOption === 'edit'}
              onClick={handleItemClick}
            />
            <Menu.Item
              name='delete'
              style={{ borderRight: '1px solid black' }}
              active={currentOption === 'delete'}
              onClick={handleItemClick}
            />
            <Menu.Item
              name='find'
              active={currentOption === 'find'}
              onClick={handleItemClick}
            />
          </Menu>   
        </Grid.Row>
      </Grid>  
    )
  }
}

HeaderComponent.propTypes = {
  statistics: PropTypes.array.isRequired,
  currentOption: PropTypes.string.isRequired,
  category: PropTypes.obj,
  handleItemClick: PropTypes.func.isRequired
}

