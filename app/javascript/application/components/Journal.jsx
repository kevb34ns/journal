import React from 'react'
import { Redirect } from 'react-router-dom'

import Header from './Header'
import EntryDisplay from './EntryDisplay'
import EntryList from './EntryList'

import * as gapiInterface from '../google-api'

class Journal extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      entries: []
    }
  }

  loadGoogleDriveApi () {
    const script = document.createElement('script')
    script.id = 'drive-script'
    script.src = 'https://apis.google.com/js/platform.js'
    document.body.appendChild(script)

    return new Promise((resolve, reject) => {
      script.onload = () => {
        gapiInterface.drivePlatformLoaded()
        resolve()
      }
    })
  }

  componentDidMount () {
    this.loadGoogleDriveApi().then(() => {
      return gapiInterface.getEntries()
    })
    .then((entries) => {
      this.setState({
        entries: entries
      })
    })
  }

  componentWillUnmount () {
    const script = document.getElementById('drive-script')
    script.parentNode.removeChild(script)
  }

  render () {
    const user = this.props.user

    return (
      <div className='outer_container'>
        {user === 'null' &&
          <Redirect to={'/react/login/'} />
        }

        <Header user={user} />
        <EntryDisplay />
        <EntryList entries={this.state.entries} />
        <div>
          {user}
        </div>
      </div>
    )
  }
}

export default Journal
