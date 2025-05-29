import React, { useState } from 'react';

function GreetingCard({ name }) {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div>
      <h4>Hello, {name}!</h4>
      <button onClick={() => setShowMessage(!showMessage)}>
        {showMessage ? 'Hide' : 'Show'} Message
      </button>
      {showMessage && <p>Welcome to the site, {name}!</p>}
    </div>
  );
}

export default GreetingCard;