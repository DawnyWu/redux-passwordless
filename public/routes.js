import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App'

import LoginForm from './components/LoginForm';
import LoginFormContainer from './containers/LoginFormContainer';
import MailSent from './pages/MailSent'
import InfoContainer from './containers/InfoContainer'
import PostPage from './pages/PostPage'
import PostComments from './pages/PostComments'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={InfoContainer} />
    <Route path="/login" component={LoginFormContainer} />
    <Route path="/posts/:id" component={PostPage} />
    <Route path="/posts/:id/comments" component={PostComments} />
    <Route path="/logout" component={InfoContainer} />
    <Route path="/sent" component={MailSent} />
  </Route>
);
