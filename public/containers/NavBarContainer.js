import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  userLogout, checkUser, checkUserSuccess, checkUserFailure } from '../actions/user';
import NavBar from '../components/NavBar.js';

function mapStateToProps(state) {
  console.log(' state.user.email '+  state.user.email);
  return { 
    email: state.user.userInfo.email
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    checkUserStatus: () => {
      // let token = sessionStorage.getItem('jwtToken');
      // if (!token || token === '') { //if there is no token, dont bother,
      //     let data = {data: {message: 'Please Sign In'}};//axios like error
      //     dispatch(deletePostFailure(data)); // but let other comps know
      //     return;
      // }

      dispatch(checkUser())
        .then((response) => {
            !response.error ? dispatch(checkUserSuccess(response.payload)) : dispatch(checkUserFailure(response));
          });
    },
    logoutUser: () => {
      dispatch(userLogout())
    }
  }
}


//      logout: () => {
//          sessionStorage.removeItem('jwtToken');
//          dispatch(logoutUser());
//      }
//   }
// }


export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
