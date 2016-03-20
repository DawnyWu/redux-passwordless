import axios from 'axios';

export const SEND_TOKEN = 'SEND_TOKEN'
export const SEND_TOKEN_SUCCESS = 'SEND_TOKEN_SUCCESS'
export const SEND_TOKEN_FAILURE = 'SEND_TOKEN_FAILURE'

export function sendToken(mail) {
  const request = axios({
    method: 'post',
    url: '/api/sendtoken',
    data: {
      user: mail
    }
  });

  return {
    type: SEND_TOKEN,
    payload: request
  };
}

export function sendTokenSuccess(data) {
  return {
    type: SEND_TOKEN_SUCCESS,
    payload: data
  }
}

export function sendTokenFailuree(err) {
  return {
    type: SEND_TOKEN_FAILURE,
    payload: err
  }
}
