import LoginForm from '../components/LoginForm'
import { reduxForm } from 'redux-form';
import {sendToken, sendTokenSuccess, sendTokenFailure} from '../actions/login'
import {userLogin} from '../actions/user'

function validate(values) {
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
} 

const mapStateToProps = (state) => {
  return { 

  };
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    sendToken: (props) => {
      dispatch(sendToken(props.email)).then((response) => {
          console.log('response:  '+response)
            !response.error ? dispatch(userLogin(response.payload.data.email)) : dispatch(sendTokenFailure(response.payload));
          });
    }
  }
}

export default reduxForm({
  form: 'login', 
  fields: ['email'], 
  null,
  null,
  validate 
}, mapStateToProps, mapDispatchToProps)(LoginForm);