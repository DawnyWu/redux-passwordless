import {
  SEND_TOKEN, SEND_TOKEN_SUCCESS, SEND_TOKEN_FAILURE
} from '../actions/login';

const INITIAL_STATE = { login_token: { error: null, loading: false},  
          };

export default function(state = INITIAL_STATE, action) {
  let error;
  switch(action.type) {

  case SEND_TOKEN:// start fetching posts and set loading = true
    return { ...state, login_token: { error: null, loading: true} }; 
  case SEND_TOKEN_SUCCESS:// return list of posts and make loading = false
    return { ...state, login_token: { error:null, loading: false} };
  case SEND_TOKEN_FAILURE:// return error and make loading = false
    error = action.payload.data || {message: action.payload.message};//2nd one is network or server down errors
    return { ...state, postsList: { error: error, loading: false} };
 
  default:
    return state;
  }
}
