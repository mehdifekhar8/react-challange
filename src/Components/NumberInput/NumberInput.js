import React, { useState } from "react";

import "./NumberInput.css";

const NumberInput = ({ onChange }) => {
  const [value, setValue] = useState(0);

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    onChange(Number(inputValue));
  };

  return (
    <input
      type="number"
      value={value}
      onChange={handleChange}
      placeholder="Enter a number"
      className="number-input"
    />
  );
};

export default NumberInput;
