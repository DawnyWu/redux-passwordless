import React, { Component, PropTypes } from 'react';
import styles from './PostItem.css'
import Avatar from 'react-letter-avatar'
import {Link} from 'react-router'

class PostItem extends Component {

  render() {

    let {title, id} = this.props.data

    return(
      <div className={styles.topic}>
        <div className="avatar media-left">
          <Avatar name={title} size={48} />
        </div>
        <div className={styles.infos}>
          <div className={styles.title}>
            <Link to={`/posts/${id}/comments`}>{title}</Link>
          </div>
          <div className="info">
            user name
          </div>
        </div>
        <div className="count media-right">
            <a className="state-false" href="/topics/24325#reply84">84</a>
        </div>
      </div>
    )
  }
}

export default PostItem;