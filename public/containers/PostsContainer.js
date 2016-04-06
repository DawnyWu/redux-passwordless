import Posts from '../components/Posts.js';
import { getPosts, getPostsSuccess, getPostsFailure  } from '../actions/posts';
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
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Posts);
