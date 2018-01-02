import React from 'react'
import { Redirect } from 'react-router-dom'

import Header from './Header'
import EntryDisplay from './EntryDisplay'
import EntryList from './EntryList'

import * as gapiInterface from '../google-api'

class Journal extends React.Component {

  loadGoogleDriveApi () {
    const script = document.createElement('script')
    script.id = 'drive-script'
    script.src = 'https://apis.google.com/js/platform.js'
    script.onload = () => gapiInterface.drivePlatformLoaded()
    document.body.appendChild(script)
  }

  componentDidMount () {
    this.loadGoogleDriveApi()
  }

  componentWillUnmount () {
    const script = document.getElementById('drive-script')
    script.parentNode.removeChild(script)
  }

  render () {
    return (
      <div>
        {this.props.user === 'null' &&
          <Redirect to={'/react/login/'} />
        }

        <Header user={this.props.user} />
        <EntryDisplay />
        <EntryList />
        <div>
          {this.props.user}
        </div>
      </div>
    )
  }
}

export default Journal