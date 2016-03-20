import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App'

import LoginForm from './components/LoginForm';
import LoginFormContainer from './containers/LoginFormContainer';
import MailSent from './pages/MailSent'
import Info from './pages/Info'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={MailSent} />
    <Route path="/login" component={LoginFormContainer} />
    <Route path="/logout" component={Info} />
    <Route path="/sent" component={MailSent} />
  </Route>
);
