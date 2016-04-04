import { combineReducers } from 'redux';
import LoginReducer from './reducer_login';
import {GrowlerReducer} from 'flash-notification-react-redux';
// import PostsReducer from './reducer_posts';
import UserReducer from './reducer_user';
import PostsReducer from './reducer_posts';
import CommentsReducer from './reducer_comments';
import PostReducer from './reducer_post';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  login: LoginReducer,
  user: UserReducer,
  posts: PostsReducer,
  comments: CommentsReducer,
  post: PostReducer,
  form: formReducer, // <-- redux-form
  growler: GrowlerReducer
});

export default rootReducer;