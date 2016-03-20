import axios from 'axios';


// 访问接口，利用session查看用户是否为登录状态
export const CHECK_USER= 'CHECK_USER';
export const CHECK_USER_SUCCESS= 'CHECK_USER_SUCCESS';
export const CHECK_USER_FAILURE= 'CHECK_USER_FAILURE';

// 通过api销毁session
export const USER_LOGOUT = 'USER_LOGOUT';
export const USER_LOGOUT_SUCESS = 'USER_LOGOUT_SUCESS';


export function userLogout() {
  let response = axios.get('http://localhost:3006/api/destory_session')
  return {
    type: USER_LOGOUT
  }
}

export function checkUser() {
  let response = axios.get('http://localhost:3006/api/check_user')
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
