import {GET_COMMENTS, GET_COMMENTS_SUCCESS, GET_COMMENTS_FAILURE, RESET_COMMENTS} 
from '../actions/comments'

const INITIAL_STATE = {
  comments: [], error: null, loading: false
};

export default function(state = INITIAL_STATE, action) {
  switch(action.type){

  case GET_COMMENTS:
    return { ...state, comments:[], error: null, loading: true }; 
  case GET_COMMENTS_SUCCESS:
    return { ...state, comments: action.payload.data, error:null, loading: false};
  case GET_COMMENTS_FAILURE:
    let error = action.payload.data || {message: action.payload.message};//2nd one is network or server down errors
    return { ...state, comments: [], error: error, loading: false};
  case RESET_COMMENTS:
    return { ...state, ...INITIAL_STATE}
  default:
    return state;
  }
}
