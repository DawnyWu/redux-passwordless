import React, { Component, PropTypes } from 'react';
import styles from './Comment.css'
import Avatar from 'react-avatar'
import ReactLetterAvatar from 'react-letter-avatar'
import Infinite from 'react-infinite'

class Comment extends Component {

  render() {

    let {email, body} = this.props.data
    console.log('style:'+styles.reply)
    
    return(
      <div className={styles.reply}>
        <div className={styles.avatar}>
        <ReactLetterAvatar name='aello' size={48}/>
        </div>
        <div className={styles.infos}>
          {body}
        </div>
      </div>
    )
  }
}

export default Comment;