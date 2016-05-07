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
            <li>
              <Link to="/github">Github</Link>
            </li>
            <li>
              <Link to="/posts">posts</Link>
            </li>
            <li>
              <Link to="/posts/1">post 1</Link>
              <Link to="/posts/2">post 2</Link>
              <Link to="/posts/3">post 3</Link>
              <Link to="/posts/4">post 4</Link>
              <Link to="/posts/999">post error</Link>
            </li>
            <li>
              Comments
              <Link to="/posts/1/comments">post 1</Link>
              <Link to="/posts/2/comments">post 2</Link>
              <Link to="/posts/3/comments">post 3</Link>
              <Link to="/posts/4/comments">post 4</Link>
              <Link to="/posts/999/comments">post error</Link>
            </li>
            <li>
              <Link to="/posts">posts</Link>
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