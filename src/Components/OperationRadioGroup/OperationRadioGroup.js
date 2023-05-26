import React from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

import "./OperationRadioGroup.css";

const OperationRadioGroup = ({ operation, index, handleOperationChange }) => {
  return (
    <div className="operation-radio-group">
      <label className="operation-label">
        <input
          type="radio"
          value="+"
          checked={operation === "+"}
          onChange={() => handleOperationChange(index, "+")}
        />
        <FiPlus className="operation-icon" />
      </label>
      <label className="operation-label">
        <input
          type="radio"
          value="-"
          checked={operation === "-"}
          onChange={() => handleOperationChange(index, "-")}
        />
        <FiMinus className="operation-icon" />
      </label>
    </div>
  );
};

export default OperationRadioGroup;
