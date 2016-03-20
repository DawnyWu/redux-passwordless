import React, { Component } from 'react';

class MailSent extends Component {
  render() {
    return (
      <div>
        <h1>Email sent</h1>
        <p>Please check your inbox and click on the link provided</p>
        <ul>
          <li>
            <a href='/'>Back to homepage</a>
          </li>
          <li>
            <a href='/restricted'>Restricted page</a>
          </li>
        </ul>
      </div>
    );
  }
}


export default MailSent;
