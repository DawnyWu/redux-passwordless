import Comments from '../components/Comments.js';
import { getComments, getCommentsSuccess, getCommentsFailure, resetComments  } from '../actions/comments';
import { connect } from 'react-redux';
import {GrowlerActions} from 'flash-notification-react-redux';

function mapStateToProps(globalState, ownProps) {
  return { comments: globalState.comments, postId: ownProps.id };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getComments: (id) => {
      dispatch(getComments(id))
        .then((data) => 
          {
            if(!data.error){
              dispatch(getCommentsSuccess(data.payload))
            }else{
              dispatch(getCommentsFailure(data.payload));
              dispatch(GrowlerActions.showGrowlerError(data.payload.statusText));
            }
          }) 
    },
    resetMe: () =>{
      dispatch(resetComments());
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Comments);
