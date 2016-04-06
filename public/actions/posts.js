import axios from 'axios';

// 获得posts
export const GET_POSTS = 'GET_POSTS';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE';
// export const RESET_TOKEN = 'RESET_TOKEN';

export const getPosts = () => {
  let request = axios.get('http://jsonplaceholder.typicode.com/posts')
  return {
    type: GET_POSTS,
    payload: request
  }
}

export const getPostsSuccess = (posts) => {
  return {
    type: GET_POSTS_SUCCESS,
    payload: posts
  }
}

export const getPostsFailure = (error) => {
  return {
    type: GET_POSTS_FAILURE,
    payload: error
  }
}

