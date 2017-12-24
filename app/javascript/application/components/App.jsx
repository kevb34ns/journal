import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Login from './Login'
import Journal from './Journal'

class App extends React.Component {

  render () {
    return (
      <Router user={this.props.user}>
        <main>
          <Route
            exact={true}
            path='/react/'
            user={this.props.user}
            render={(routeProps) =>
              <Journal {...this.props} {...routeProps} />
            }
          />
          <Route
            path='/react/login/'
            user={this.props.user}
            render={(routeProps) =>
              <Login {...this.props} {...routeProps} />
            }
          />
        </main>
      </Router>
    )
  }
}

export default App