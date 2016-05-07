import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import PostItem from './PostItem'
import _ from 'lodash'
import Infinite from 'react-infinite'
import axios from 'axios';
import Loader from 'react-loader'

class Posts extends Component {
  componentWillMount() {
    //Important! If your component is navigating based on some global state(from say componentWillReceiveProps)
    //always reset that global state back to null when you REMOUNT
     this.props.resetMe();
  }
  
  componentDidMount() {
    this.props.getPosts(this.props.postId);
  }

  handleInfiniteLoad(start){
    // console.log('this:'+JSON.stringify(this))
    let { posts, loading, error } = this.props.posts;
    this.props.getMorePosts(posts.length);
  }

  render() {
    let { posts, loading, error } = this.props.posts;
    if (loading) {
      return <Loader loaded={!loading} ></Loader>
    } else 
    // if(error) {
    //   return  <div className="alert alert-danger">{error.message}</div>
    // } else
    if(!posts) {
      return <span />
    }
    let postsSection = posts.map((c) => {
      return (<PostItem key={_.random(0,9999)} data={c} />)
    })

    return (
      <div className="panel panel-default" >
        <div className="panel-body">
          <Infinite 
            // containerHeight={400}
            elementHeight={62.727} 
            useWindowAsScrollContainer
            infiniteLoadBeginEdgeOffset={200}
            onInfiniteLoad = {this.handleInfiniteLoad.bind(this)}
          >
            {postsSection}
          </Infinite>
        </div>
      </div>
    );
  }
}

export default Posts;
