import React, { Component } from 'react';
import HobbyList from './HobbyList';

class User extends Component {
  render() {
    const { name, email, hobbies } = this.props;
    return (
      <div>
        <h2>{name} ({email})</h2>
        <HobbyList hobbies={hobbies} />
      </div>
    );
  }
}

export default User;
