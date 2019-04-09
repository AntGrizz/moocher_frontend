import React from 'react';
import { connect } from 'react-redux';


const Profile = props => {
  console.log(props);
  return <div>
    </div>;
};

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};


export default connect(mapStateToProps)(Profile);
