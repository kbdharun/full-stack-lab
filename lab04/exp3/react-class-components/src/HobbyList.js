import React, { Component } from 'react';

class HobbyList extends Component {
  render() {
    const { hobbies } = this.props;
    return (
      <div>
        <h3>Hobbies:</h3>
        <ul>
          {hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default HobbyList;
