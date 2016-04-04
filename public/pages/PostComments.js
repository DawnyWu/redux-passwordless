import React, { Component } from 'react';
import CommentsContainer from '../containers/CommentsContainer'
import PostContainer from '../containers/PostContainer'
import {Link} from 'react-router'

class PostComments extends Component {
  render() {
    return (
      <div>
        <PostContainer id={this.props.params.id} />
        <CommentsContainer id={this.props.params.id} />
      </div>
    );
  }
}


export default PostComments;
