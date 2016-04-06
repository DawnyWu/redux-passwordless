import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import PostItem from './PostItem'
import _ from 'lodash'

class Posts extends Component {

  componentDidMount() {
    this.props.getPosts(this.props.postId);
  }


  render() {
    let { posts, loading, error } = this.props.posts;
    // if (loading) {
    //   return <div className="container">Loading...</div>;
    // } else if(error) {
    //   return  <div className="alert alert-danger">{error.message}</div>
    // } else
    if(!posts) {
      return <span />
    }

    console.log('posts:' + JSON.stringify(posts))

    let postsSection = posts.map((c) => {
      return (<PostItem key={c.id} data={c} />)
    })

    return (
      <div className="panel panel-default" >
        <div className="panel-body">
          {postsSection}
        </div>
      </div>
    );
  }
}

export default Posts;
