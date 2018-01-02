import React from 'react'

class Header extends React.Component {

  render () {
    const user = JSON.parse(this.props.user)

    return (
      <header className="navbar navbar-fixed-top">
        <a href="#" className="logo">JOURNAL</a>
        <nav>
          <ul className="nav navbar-nav navbar-right">
            <li className="dropdown">
              <a href="" className="dropdown-toggle" data-toggle="dropdown">
                <img className='profile-image' />
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href=''>{user.given_name}</a>
                </li>
                <li className="divider"></li>
                <li>
                  <a href=''>Sign Out</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header