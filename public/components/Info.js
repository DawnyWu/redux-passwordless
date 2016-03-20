import React, { Component } from 'react';
import { Link } from 'react-router'

class Info extends Component {
  // componentWillMount() {
  //   this.props.user;
  // }

  render() {
    const {user} = this.props
    if(!user){
      return (
        <div>
          <h1>Redux Passwordless</h1>
            <p>不需要密码即可登录网站</p>
          <ul>
            <li>
              <Link to="/login">现在登录试试！</Link>
            </li>
          </ul>
        </div>
      );      
    }
    return (
      <div>
        <h1>{user}登陆成功</h1>
      </div>
    );
  }
}


export default Info;