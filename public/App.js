import React from 'react';
import { Component } from 'react';
import NavBarContainer from './containers/NavBarContainer';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBarContainer/>
        {this.props.children}
      </div>
    );
  }
}
export default App