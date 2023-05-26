import React, { useState } from 'react';
import './NumberInput.css';
const NumberInput = () => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    const inputValue = e.target.value;

    // Remove any non-numeric characters
    const numericValue = inputValue.replace(/[^0-9]/g, '');

    setValue(numericValue);
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      placeholder="Enter a number"
      className='number-input'
    />
  );
};

export default NumberInput;