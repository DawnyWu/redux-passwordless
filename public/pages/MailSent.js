import React, { Component } from 'react';
import {Link} from 'react-router'

class MailSent extends Component {
  render() {
    return (
      <div>
        <h1>邮件已发送</h1>
          <p>请查看邮箱并点击登录链接</p>
        <ul>
          <li>
            <Link to='/'>返回主页</Link>
          </li>
        </ul>
      </div>
    );
  }
}


export default MailSent;
