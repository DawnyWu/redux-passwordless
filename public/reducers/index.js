import { combineReducers } from 'redux';
import LoginReducer from './reducer_login';
import {GrowlerReducer} from 'flash-notification-react-redux';
// import PostsReducer from './reducer_posts';
import UserReducer from './reducer_user';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  login: LoginReducer,
  user: UserReducer,
  // posts: PostsReducer, //<-- Posts
  form: formReducer, // <-- redux-form
  growler: GrowlerReducer
});

export default rootReducer;