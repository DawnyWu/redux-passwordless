import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { deletePost } from '../actions/posts';
// import Header from '../containers/HeaderContainer.js';
import PostContainer from '../containers/PostContainer.js';

class PostPage extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  // onDeleteClick() {
  //   this.props.deletePost(this.props.params.id)
  //     .then(() => { this.context.router.push('/'); });
  // }

  render() {
    return (
      <div className='container'>
        <PostContainer id={this.props.params.id}/>
      </div>
    );
  }
}

export default PostPage;
