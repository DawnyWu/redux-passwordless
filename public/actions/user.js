import axios from 'axios';

export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';
// 访问接口，利用session查看用户是否为登录状态
export const CHECK_USER= 'CHECK_USER';
export const CHECK_USER_SUCCESS= 'CHECK_USER_SUCCESS';
export const CHECK_USER_FAILURE= 'CHECK_USER_FAILURE';

export function userLogin(email) {
  console.log('email:   ' + email)
  return {
    type: USER_LOGIN,
    payload: email 
  };
}

export function userLogout(data) {
  return {
    type: USER_LOGOUT
  }
}

export function checkUser() {
  let response = axios.get('http://localhost:3006/api/check_user')
  console.log('response:  ' + response)
  return {
    type: CHECK_USER,
    payload: response
  }
}

export function checkUserSuccess(data) {
  console.log('checkUserSuccess:'+ JSON.stringify(data) )
  return {
    type: CHECK_USER_SUCCESS,
    payload: data.data.user
  }
}

export function checkUserFailure(err) {
  return {
    type: CHECK_USER_FAILURE,
    payload: err
  }
}
