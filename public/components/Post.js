import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Loader from 'react-loader'

class Post extends Component {
  // static contextTypes = {
  //   router: PropTypes.object
  // };

  componentWillUnmount() {
    this.props.resetMe();
  }

  componentDidMount() {
    this.props.getPost(this.props.postId);
  }


  render() {
    const { post, loading, error } = this.props.post;
    // if(post !== {}){
    console.log('post:'+ post)
    console.log('post:'+ JSON.stringify(post))
    console.log('loading status:' + loading)
    // console.log('post.post:'+ JSON.stringify(post.post.id))
    // console.log('post title:'+ JSON.stringify(post.title))
    // console.log('post body:'+ JSON.stringify(post.body))
    // }
    if (loading) {
      return (
        <div>
          <Loader loaded={!loading} >
          </Loader>
        </div>
      )
    } else 
    // if(error) {
    //   return  <div className="alert alert-danger">{error.message}</div>
    // } else 
    if(!post) {
      return <span />
    }

    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">{post.title}</h3>
        </div>
        <div className="panel-body">
          {post.body}
        </div>
      </div>
    );
  }
}

export default Post;
