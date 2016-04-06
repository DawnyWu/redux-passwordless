import {GET_POSTS, GET_POSTS_SUCCESS, GET_POSTS_FAILURE} 
from '../actions/posts'

const INITIAL_STATE = { 
  posts: [], error: null, loading: false
};

export default function(state = INITIAL_STATE, action) {
  switch(action.type){

  case GET_POSTS:
    return { ...state, posts:[], error: null, loading: true}; 
  case GET_POSTS_SUCCESS:
    return { ...state, posts: action.payload.data, error:null, loading: false};
  case GET_POSTS_FAILURE:
    let error = action.payload.data || {message: action.payload.message};//2nd one is network or server down errors
    return { ...state, posts: [], error: error, loading: false };
  default:
    return state;
  }
}
