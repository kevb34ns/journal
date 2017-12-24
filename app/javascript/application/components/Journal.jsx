import React from 'react'
import { Redirect } from 'react-router-dom'

class Journal extends React.Component {
  render () {
    return (
      <div>
        {this.props.user === 'null' &&
          <Redirect to={'/react/login/'} />
        }
        {this.props.user}
      </div>
    )
  }
}

export default Journal