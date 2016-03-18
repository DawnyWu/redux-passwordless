import { combineReducers } from 'redux';
// import PostsReducer from './reducer_posts';
// import UserReducer from './reducer_user';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  // user: UserReducer,
  // posts: PostsReducer, //<-- Posts
  form: formReducer // <-- redux-form
});

export default rootReducer;