import React from 'react'
import { Redirect } from 'react-router-dom'

import * as gapi from '../google-api'

class Login extends React.Component {
  render () {
    return (
      <div>
        {this.props.user !== 'null' &&
          <Redirect to={'/react/'} />
        }
        <div id="sign-in-button" style={{display:'none'}}></div>

        <script src="https://apis.google.com/js/platform.js?onload=gapi.authPlatformLoaded" async defer></script>
      </div>
    )
  }
}

export default Login