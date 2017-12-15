import React, { Component } from 'react'
import { 
  Menu, 
  Segment, 
  List, 
  Table, 
  Card, 
  Grid 
} from 'semantic-ui-react'

export default class App extends Component {

  render() {
    return (
      <div>
          <Grid divided='vertically'>
            <Grid.Row columns={2}>
              <Grid.Column width={3}>
                <Card>
                  <Card.Content>
                    <Card.Header>
                      Metarhia
                    </Card.Header>
                    <Card.Meta>
                      <span className='date'>
                        Since 1096
                      </span>
                    </Card.Meta>
                    <Card.Description>
                      Wake up Neo...
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <List divided relaxed>
                      <List.Item>
                        <List.Icon name='users' size='small' verticalAlign='middle' />
                        <List.Content>
                          <List.Description as='a'>Create category</List.Description>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Icon name='marker' size='small' verticalAlign='middle' />
                        <List.Content>
                          <List.Description as='a'>Servers</List.Description>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Icon name='linkify' size='small' verticalAlign='middle' />
                        <List.Content>
                          <List.Description as='a'>Health</List.Description>
                        </List.Content>
                      </List.Item>
                    </List>
                  </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column>
                <div>
                  <Menu pointing secondary>
                    <Menu.Item name='home' />
                    <Menu.Item name='messages' />
                    <Menu.Item name='friends' />
                  </Menu>

                  <Segment>
                    <Table celled>
                      <Table.Header>
                        <Table.Row>
                          <Table.HeaderCell>Header</Table.HeaderCell>
                          <Table.HeaderCell>Header</Table.HeaderCell>
                          <Table.HeaderCell>Header</Table.HeaderCell>
                        </Table.Row>
                      </Table.Header>

                      <Table.Body>
                        <Table.Row>
                          <Table.Cell>Cell</Table.Cell>
                          <Table.Cell>Cell</Table.Cell>
                          <Table.Cell>Cell</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>Cell</Table.Cell>
                          <Table.Cell>Cell</Table.Cell>
                          <Table.Cell>Cell</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>Cell</Table.Cell>
                          <Table.Cell>Cell</Table.Cell>
                          <Table.Cell>Cell</Table.Cell>
                        </Table.Row>
                      </Table.Body>
                    </Table>
                  </Segment>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
      </div>
    )
  }
}
