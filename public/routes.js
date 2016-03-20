import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App'

import LoginForm from './components/LoginForm';
import LoginFormContainer from './containers/LoginFormContainer';
import MailSent from './pages/MailSent'
// import App from './pages/App';
// import PostsIndex from './pages/PostsIndex';
// import PostsNew from './pages/PostsNew';
// import PostsShow from './pages/PostsShow';
// import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={MailSent} />
    <Route path="/login" component={LoginFormContainer} />
    <Route path="/sent" component={MailSent} />
  </Route>
);
