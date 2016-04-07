import axios from 'axios';
import _ from 'lodash';

// 获得post
export const GET_POST = 'GET_POST';
export const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
export const GET_POST_FAILURE = 'GET_POST_FAILURE';
export const RESET_POST = 'RESET_POST';

const host = 'http://jsonplaceholder.typicode.com'
// const host = 'http://localhost:3000'
export const getPost = (id) => {

  // _.delay((text) => {
  //   console.log(text);
  // }, 1000, 'later');

  // let delay_id = _.delay((url) => {
  //   let request = axios.get(url)
  //   return {
  //     type: GET_POST,
  //     payload: request
  //   }
  // }, 5000, `${host}/posts/${id}`);
  let request = axios.get(`${host}/posts/${id}`)
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

