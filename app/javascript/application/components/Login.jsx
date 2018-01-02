import React from 'react'
import { Redirect } from 'react-router-dom'

import * as gapiInterface from '../google-api'

class Login extends React.Component {

  loadGoogleAPI () {
    const script = document.createElement('script')
    script.src = 'https://apis.google.com/js/platform.js'
    script.onload = () => gapiInterface.authPlatformLoaded()
    document.body.appendChild(script)
  }

  componentDidMount () {
    this.loadGoogleAPI()
  }

  render () {
    return (
      <div>
        {this.props.user !== 'null' &&
          <Redirect to={'/react/'} />
        }
        <div id="sign-in-button" style={{display:'none'}}></div>
      </div>
    )
  }
}

export default Login