import {
  USER_LOGIN, USER_LOGOUT, CHECK_USER, CHECK_USER_SUCCESS, CHECK_USER_FAILURE
} from '../actions/user';

const INITIAL_STATE = { userInfo: { email: null } };

export default function(state = INITIAL_STATE, action) {
  let error;
  switch(action.type) {
  case USER_LOGIN:// start fetching posts and set loading = true
    return { ...state, userInfo: { email: action.payload } }; 
  case USER_LOGOUT:// return list of posts and make loading = false
    return { ...state, userInfo: { email: null } };
  case CHECK_USER:
    return { ...state, userInfo: { email: null }};
  case CHECK_USER_SUCCESS:
    return { ...state, userInfo: { email: action.payload } };
  case CHECK_USER_FAILURE:
    return { ...state, userInfo: { email: null }};

  default:
    return state;
  }
}
