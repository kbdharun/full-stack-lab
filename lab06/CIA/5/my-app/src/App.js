// CIA I - Q5
// Create a currency conversion app that allows users to enter a value in one currency and have it converted to another. 
// Use a hardcoded exchange rate for the purposes of this challenge. 
// Utilize React state and event handlers to control the input and conversion calculations.

import React, { useState } from 'react';

function CurrencyConverter() {
  const [amount, setAmount] = useState('');
  const [convertedAmount, setConvertedAmount] = useState(0);

  // Hardcoded exchange rate
  const exchangeRate = 87;

  const handleConversion = () => {
    setConvertedAmount(amount * exchangeRate);
  };

  return (
    <div>
      <h2>Currency Converter</h2>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount in USD"
      />
      <button onClick={handleConversion}>Convert to INR</button>
      <p>Converted Amount: {convertedAmount} INR</p>
    </div>
  );
}

export default CurrencyConverter;
