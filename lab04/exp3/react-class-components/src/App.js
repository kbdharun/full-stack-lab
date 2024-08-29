import React, { Component } from 'react';
import './App.css';
import UserList from './UserList';

const users = [
  {
    name: 'John Doe',
    email: 'john.doe@example.com',
    hobbies: ['Reading', 'Traveling', 'Swimming']
  },
  {
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    hobbies: ['Cooking', 'Painting']
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserList users={users} />
      </div>
    );
  }
}

export default App;
