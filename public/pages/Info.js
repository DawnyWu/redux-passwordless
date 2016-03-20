import React, { Component } from 'react';
import { Link } from 'react-router'

class Info extends Component {
  render() {
    return (
      <div>
        <h1>Redux Passwordless</h1>
          <p>不需要密码即可登录网站</p>
        <ul>
          <li>
            <Link to="/login">现在登录试试！</Link>
          </li>
          <li>
            
          </li>
        </ul>
      </div>
    );
  }
}


export default Info;