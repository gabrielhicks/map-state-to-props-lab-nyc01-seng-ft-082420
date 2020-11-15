import React, { Component } from 'react';
import {connect} from 'react-redux'
class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          {this.props.users.map(user => <p>{user.username}</p>)}
          <p>{this.props.users.length}</p>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    numberOfUsers: state.users.length
  };
};


export default connect(mapStateToProps)(Users)
