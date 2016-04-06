import {GET_POST, GET_POST_SUCCESS, GET_POST_FAILURE, RESET_POST} 
from '../actions/post'

const INITIAL_STATE = { 
  post: {}, error:null, loading: false
};

export default function(state = INITIAL_STATE, action) {
  switch(action.type){

  case GET_POST:
    return { ...state, post: null, error: null, loading: true }; 
  case GET_POST_SUCCESS:
    return { ...state, post: action.payload.data, error:null, loading: false };
  case GET_POST_FAILURE:
    let error = action.payload.statusText || {message: action.payload.message};//2nd one is network or server down errors
    return { ...state, post: {}, error: error, loading: false };
  case RESET_POST:
    return { ...state, ...INITIAL_STATE}
  default:
    return state;
  }
}
