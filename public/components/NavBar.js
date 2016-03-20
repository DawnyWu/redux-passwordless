import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

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
              <a className="navbar-brand" href="#">Brand</a>
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
              <a className="navbar-brand" href="#">Brand</a>
            </div>

            <div className="collapse navbar-collapse">
              <ul className="nav navbar-nav navbar-right">
                <li><a href="#">{email}</a></li>
                <li><Link onClick={this.props.logoutUser} to="/logout">登出</Link></li>
              </ul>
            </div>
          </div>
        </nav>        
    )

  }

}

export default NavBar