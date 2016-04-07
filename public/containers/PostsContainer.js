import Posts from '../components/Posts.js';
import  
{ getPosts, getPostsSuccess, getPostsFailure,
  getMorePosts, getMorePostsSuccess, getMorePostsFailure, resetPosts
} from '../actions/posts';
import { connect } from 'react-redux';
import {GrowlerActions} from 'flash-notification-react-redux';

function mapStateToProps(globalState, ownProps) {
  return { posts: globalState.posts, postId: ownProps.id };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: (id) => {
      dispatch(getPosts(id))
        .then((data) => 
          {
            if(!data.error){
              dispatch(getPostsSuccess(data.payload))
            }else{
              dispatch(getPostsFailure(data.payload));
              dispatch(GrowlerActions.showGrowlerError(data.payload.statusText));
            }
          }) 
    },
    getMorePosts: (start) => {
      dispatch(getMorePosts(start))
        .then((data) => 
          {
            if(!data.error){
              dispatch(getMorePostsSuccess(data.payload))
            }else{
              dispatch(getMorePostsFailure(data.payload));
              dispatch(GrowlerActions.showGrowlerError(data.payload.statusText));
            }
          }) 
    },
    resetMe: () =>{
      dispatch(resetPosts());
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Posts);
