import React from 'react'
import { Redirect } from 'react-router-dom'

import * as gapiInterface from '../google-api'

class Login extends React.Component {
  loadGoogleAuthApi () {
    const script = document.createElement('script')
    script.id = 'auth-script'
    script.src = 'https://apis.google.com/js/platform.js'
    script.onload = () => gapiInterface.authPlatformLoaded()
    document.body.appendChild(script)
  }

  componentDidMount () {
    this.loadGoogleAuthApi()
  }

  componentWillUnmount () {
    const script = document.getElementById('auth-script')
    script.parentNode.removeChild(script)
  }

  render () {
    return (
      <div>
        {this.props.user !== 'null' &&
          <Redirect to={'/react/'} />
        }
        <div id='sign-in-button' style={{display: 'none'}} />
      </div>
    )
  }
}

export default Login
