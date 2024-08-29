import React, { Component } from 'react';
import User from './User';

class UserList extends Component {
  render() {
    const { users } = this.props;
    return (
      <div>
        {users.map((user, index) => (
          <User key={index} name={user.name} email={user.email} hobbies={user.hobbies} />
        ))}
      </div>
    );
  }
}

export default UserList;
