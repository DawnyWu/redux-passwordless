import Info from '../components/Info';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  console.log('state.user.userInfo.email:' + state.user.userInfo.email)
  return { 
    user: state.user.userInfo.email
  };
}

export default connect(mapStateToProps, null)(Info);