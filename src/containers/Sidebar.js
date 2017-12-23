import React from 'react'
import { Sidebar, Segment } from 'semantic-ui-react'
import AuthPanel from './AuthPanel.js'
import Searchbar from './Searchbar.js'

const SidebarLeftOverlay = () => (
      <div>
          <Sidebar width='wide' icon='labeled' visible='true' vertical inverted>
          <AuthPanel />
          <Searchbar />
          <Segment.Group>
            <center>
            <Segment><h2>Create category</h2></Segment>
            <Segment><h2>Servers</h2></Segment>
            <Segment><h2>Health</h2></Segment>
            <Segment><h2>Accounts</h2></Segment>
            <Segment><h2>Other tools and settings</h2></Segment>
            </center>
          </Segment.Group>
          </Sidebar>
      </div>
)

export default SidebarLeftOverlay
