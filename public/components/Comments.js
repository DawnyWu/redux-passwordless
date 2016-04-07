import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Comment from './Comment'
import _ from 'lodash'
import Infinite from 'react-infinite'

class Comments extends Component {
  componentWillMount() {
     this.props.resetMe();
  }

  componentDidMount() {
    this.props.getComments(this.props.postId);
  }


  render() {
    let { comments, loading, error } = this.props.comments;
    // if (loading) {
    //   return <div className="container">Loading...</div>;
    // } else if(error) {
    //   return  <div className="alert alert-danger">{error.message}</div>
    // } else
    if(!comments) {
      return <span />
    }

    console.log('comments:' + JSON.stringify(comments))

    let commentsSection = comments.map((c) => {
      return (<Comment key={c.id} data={c} />)
    })

    return (
      <div>
      <Infinite containerHeight={100} elementHeight={40}>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
      </Infinite>
      <div className="panel panel-default" >
        <div className="total panel-heading">
          共收到 <b>{comments.length}</b> 条回复
        </div>       
        <div className="panel-body">
          <Infinite containerHeight={500} elementHeight={40}>
            {commentsSection}
          </Infinite>
        </div>
      </div>
      </div>
    );
  }
}

export default Comments;
