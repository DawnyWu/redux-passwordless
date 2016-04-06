import axios from 'axios';

// 获得post
export const GET_POST = 'GET_POST';
export const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
export const GET_POST_FAILURE = 'GET_POST_FAILURE';
export const RESET_POST = 'RESET_POST';

const host = 'http://localhost:3000'
export const getPost = (id) => {
  let request = axios.get(`http://jsonplaceholder.typicode.com/posts/${id}`)
  return {
    type: GET_POST,
    payload: request
  }
}

export const getPostSuccess = (post) => {
  return {
    type: GET_POST_SUCCESS,
    payload: post
  }
}

export const getPostFailure = (error) => {
  return {
    type: GET_POST_FAILURE,
    payload: error
  }
}

export const resetPost = () => {
  return {
    type: RESET_POST
  }
}
