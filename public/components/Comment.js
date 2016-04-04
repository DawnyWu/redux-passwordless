import React, { Component, PropTypes } from 'react';
import styles from './Comment.css'

class Comment extends Component {

  render() {

    let {email, body} = this.props.data
    console.log('style:'+styles.reply)
    
    return(
      <div className={styles.reply}>
        {email}:{body}
      </div>
    )
  }
}

export default Comment;