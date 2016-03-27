import React from 'react';
import { Component } from 'react';
import NavBarContainer from './containers/NavBarContainer';
import TestFlashContainer from './containers/TestFlashContainer';
// import Growler from './components/Growler'
import {GrowlerContainer} from 'flash-notification-react-redux';
import GrowlerMessages from './locales/growler.locale.js';

export default class App extends Component {
 // 他需要收到一个growler对象，栗子里是从哪里得到的？
  render() {

    return (
      <div className='container'>
        <GrowlerContainer messages={GrowlerMessages} showFor={3000} currentLocale="enUS" />
        <NavBarContainer/>
        {this.props.children}
        <TestFlashContainer/>
      </div>
    );
  }
}
export default App