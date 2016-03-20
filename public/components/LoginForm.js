import React, { Component, PropTypes } from 'react'
import {reduxForm} from 'redux-form';

const validate = values => {
  const errors = {};
  // if (!values.username) {
  //   errors.username = 'Required';
  // } else if (values.username.length > 15) {
  //   errors.username = 'Must be 15 characters or less';
  // }
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  // if (!values.age) {
  //   errors.age = 'Required';
  // } else if (isNaN(Number(values.age))) {
  //   errors.age = 'Must be a number';
  // } else if (Number(values.age) < 18) {
  //   errors.age = 'Sorry, you must be at least 18 years old';
  // }
  return errors;
};

class LoginForm extends Component {
  render() {
  const {fields: {email}, handleSubmit} = this.props;

    return(
      <form onSubmit={handleSubmit(this.props.sendToken.bind(this))}>
        <div className="col-lg-6">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="输入邮箱" {...email}></input>
            <span className="input-group-btn">
              <button className="btn btn-default" type="submit">Go!</button>
            </span>
          </div>
          {email.touched && email.error && <div>{email.error}</div>}
        </div>   
      </form>
    )
  }
}

// LoginForm = reduxForm({ // <----- THIS IS THE IMPORTANT PART!
//   form: 'login',                           // a unique name for this form
//   fields: ['email'], // all the fields in your form
//   validate
// })(LoginForm);

export default LoginForm