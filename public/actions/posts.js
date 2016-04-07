import axios from 'axios';

// 获得posts
export const GET_POSTS = 'GET_POSTS';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE';

export const GET_MORE_POSTS = 'GET_MORE_POSTS';
export const GET_MORE_POSTS_SUCCESS = 'GET_MORE_POSTS_SUCCESS';
export const GET_MORE_POSTS_FAILURE = 'GET_MORE_POSTS_FAILURE';
export const RESET_POSTS = 'RESET_POSTS';

// let host = 'http://localhost:3000'
let host = 'http://jsonplaceholder.typicode.com'
export const getPosts = () => {
  let request = axios.get(`${host}/posts?_start=0&_limit=10`)
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

export const getMorePosts = (start) => {
  let request = axios.get(`${host}/posts?_start=${start}&_limit=10`)
  return {
    type: GET_MORE_POSTS,
    payload: request
  }
}

export const getMorePostsSuccess = (posts) => {
  console.log('getMorePostsSuccess payload:' + JSON.stringify(posts))
  return {
    type: GET_MORE_POSTS_SUCCESS,
    payload: posts
  }
}

export const getMorePostsFailure = (error) => {
  return {
    type: GET_MORE_POSTS_FAILURE,
    payload: error
  }
}

export const resetPosts = () => {
  return {
    type: RESET_POSTS
  }
}

