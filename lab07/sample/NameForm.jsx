// NameForm.jsx
import React, { useState, useEffect } from 'react';

function NameForm() {
  // Declare state variable to store the user's name
  const [name, setName] = useState('');

  // useEffect to update the document title with a greeting
  useEffect(() => {
    // Update the document title whenever the 'name' state changes
    document.title = name ? `Hello, ${name}!` : 'Enter your name';
  }, [name]); // Dependency array: useEffect runs when 'name' changes

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <label>
        Enter your name: 
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} // Update 'name' state when input changes
        />
      </label>
    </div>
  );
}

export default NameForm;
