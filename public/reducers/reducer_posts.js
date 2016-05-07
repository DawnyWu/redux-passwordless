import {GET_POSTS, GET_POSTS_SUCCESS, GET_POSTS_FAILURE, 
  GET_MORE_POSTS, GET_MORE_POSTS_SUCCESS, GET_MORE_POSTS_FAILURE,
  RESET_POSTS
} from '../actions/posts'
import _ from 'lodash'

const INITIAL_STATE = { 
  posts: [], error: null, loading: true
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
  case GET_MORE_POSTS:
    return { ...state,posts: state.posts, error: null, loading: true}; 
  case GET_MORE_POSTS_SUCCESS:
    // console.log('STATE:' + JSON.stringify(state))
    return concat_posts(state, action.payload.data)
  case GET_MORE_POSTS_FAILURE:
    error = action.payload.data || {message: action.payload.message};//2nd one is network or server down errors
    return { ...state, posts: [], error: error, loading: false };
  case RESET_POSTS:
    return { ...state, ...INITIAL_STATE}
  default:
    return state;
  }
}

const concat_posts = (state, posts) => {
  console.log('state:'+JSON.stringify(state))
  console.log(_.isEmpty(state.posts))
  if( _.isEmpty(state.posts)){
    return {...state, posts: posts, error:null, loading: false}
  } else {
    // console.log('state.posts:' + state.posts)
    // console.log('state.posts:length' + state.posts.length)
    // console.log('posts:' + posts)
    // console.log('posts:length' + posts.length)
    // console.log('concat' + (state.posts).concat(posts))
    // console.log('concat:length' + ((state.posts).concat(posts)).length)

    return {...state, posts: (state.posts).concat(posts), error:null, loading: false}
  }
}
