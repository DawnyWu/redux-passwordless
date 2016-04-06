import axios from 'axios';

// 获得comments
export const GET_COMMENTS = 'GET_COMMENTS';
export const GET_COMMENTS_SUCCESS = 'GET_COMMENTS_SUCCESS';
export const GET_COMMENTS_FAILURE = 'GET_COMMENTS_FAILURE';
export const RESET_COMMENTS = 'RESET_COMMENTS';

const host = 'http://localhost:3000'
export const getComments = (id) => {
  let request = axios.get(`${host}/posts/${id}/comments`)
  return {
    type: GET_COMMENTS,
    payload: request
  }
}

export const getCommentsSuccess = (comments) => {
  return {
    type: GET_COMMENTS_SUCCESS,
    payload: comments
  }
}

export const getCommentsFailure = (error) => {
  return {
    type: GET_COMMENTS_FAILURE,
    payload: error
  }
}

export const resetComments = () => {
  return {
    type: RESET_COMMENTS
  }
}

