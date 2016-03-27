import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TestFlash from '../components/TestFlash';
import {GrowlerActions} from 'flash-notification-react-redux';

const mapStateToProps = state => ({growler: state.growler});
const mapDispatchToProps = dispatch => {
  return {
    ...bindActionCreators(GrowlerActions, dispatch),
  };
};

@connect(mapStateToProps, mapDispatchToProps)
export default class TestFlashContainer extends React.Component {

  render() {
    return <TestFlash {...this.props} />;
  }
}
