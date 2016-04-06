import Post from '../components/Post.js';
import { getPost, getPostSuccess, getPostFailure, resetPost  } from '../actions/post';
import { connect } from 'react-redux';
import {GrowlerActions} from 'flash-notification-react-redux';



function mapStateToProps(globalState, ownProps) {
  // GrowlerActions.showGrowlerError)
  return { post: globalState.post, postId: ownProps.id };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPost: (id) => {
      dispatch(getPost(id))
        .then((data) => 
          {
            // !data.error ? dispatch(getPostSuccess(data.payload)) : 
            if(!data.error){
              dispatch(getPostSuccess(data.payload))
            }else{
              dispatch(getPostFailure(data.payload));
              dispatch(GrowlerActions.showGrowlerError(data.payload.statusText));
            }
          }) 
    },
    resetMe: () =>{
      dispatch(resetPost());
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Post);
