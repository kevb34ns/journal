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
      entryMap: {},
      selectedEntry: {}
    }

    this.handleEntryClicked = this.handleEntryClicked.bind(this)
  }

  loadGoogleDriveApi () {
    const script = document.createElement('script')
    script.id = 'drive-script'
    script.src = 'https://apis.google.com/js/platform.js'
    document.body.appendChild(script)

    return new Promise((resolve, reject) => {
      script.onload = () => {
        gapiInterface.drivePlatformLoaded().then(() => resolve())
      }
    })
  }

  componentDidMount () {
    this.loadGoogleDriveApi().then(() => gapiInterface.getEntries())
    .then((entryMap) => {
      this.setState({
        entryMap: entryMap
      })
    })
  }

  componentWillUnmount () {
    const script = document.getElementById('drive-script')
    script.parentNode.removeChild(script)
  }

  setSelectedEntry (entry) {
    this.setState({
      selectedEntry: entry
    })
  }

  handleEntryClicked (fileId) {
    if (!(fileId in this.state.entryMap)) {
      return
    }

    let entry = this.state.entryMap[fileId]
    if (!entry.text) {
      gapiInterface.downloadEntry(fileId)
        .then((response) => {
          // TODO technically violating React immutability rules
          entry.text = response.body
          this.setSelectedEntry(entry)
        })
    } else {
      this.setSelectedEntry(entry)
    }
  }

  render () {
    const user = this.props.user

    return (
      <div className='outer_container'>
        {user === 'null' &&
          <Redirect to={'/react/login/'} />
        }

        <Header user={user} />
        <EntryDisplay selectedEntry={this.state.selectedEntry} />
        <EntryList
          entries={Object.values(this.state.entryMap)}
          onEntryClicked={this.handleEntryClicked} />
      </div>
    )
  }
}

export default Journal
