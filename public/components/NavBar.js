import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import Avatar from 'react-avatar'

class NavBar extends Component {
  componentWillMount() {
    this.props.checkUserStatus();
  }
  render(){
    const { email } = this.props
    if(!email){
      return (
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">Redux Passwordless</a>
            </div>

            <div className="collapse navbar-collapse">
              <ul className="nav navbar-nav navbar-right">
                <li><Link to="/login">登陆</Link></li>
              </ul>
            </div>
          </div>
        </nav>         
      )      
    }

    return (
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">Redux Passwordless</a>
            </div>

            <div className="collapse navbar-collapse">
              <ul className="nav navbar-nav navbar-right">
                <li><a href="#">{email}</a></li>
                <li><Avatar size="50" email={email}/></li>
                <li><Link onClick={this.props.logoutUser} to="/">登出</Link></li>
              </ul>
            </div>
          </div>
        </nav>        
    )

  }

}

export default NavBar