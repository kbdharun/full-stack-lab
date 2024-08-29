// CIA I - Q4
// In React, a component can transfer data to another component. Explain the various options that are available in React for implementing these data transfers. 
// Assume you forgot to pass a required prop to the component that needs it. 
// How will the React application respond? 
// Explain all the options you have for addressing this issue, using examples.

// Example of Prop Types and default props in React

import React from 'react';
import PropTypes from 'prop-types';

class MyComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

// PropTypes help in ensuring the right type of props are passed to a component
MyComponent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

// Default props can be used to set default values for props that are not passed
MyComponent.defaultProps = {
  description: 'This is a default description.',
};

// Usage of MyComponent
function App() {
  return (
    <div>
      <MyComponent title="Hello World" />
      <MyComponent title="Another Title" description="Custom description." />
    </div>
  );
}

export default App;
