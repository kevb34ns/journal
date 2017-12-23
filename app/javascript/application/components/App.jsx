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
      <Router>
        <main>
          <Route
            exact={true}
            path='/react/'
            component={Journal}
          />
          <Route
            path='/react/login/'
            component={Login}
          />
        </main>
      </Router>
    )
  }
}

export default App