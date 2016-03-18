import React, { Component, PropTypes } from 'react';

class LoginForm extends Component {
  render() {
    return(
      <div className="col-lg-6">
        <div className="input-group">
          <input type="text" className="form-control" placeholder="输入邮箱"></input>
          <span className="input-group-btn">
            <button className="btn btn-default" type="button">Go!</button>
          </span>
        </div>
      </div>   
    )
 
  }
}

export default LoginForm