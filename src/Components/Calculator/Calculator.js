import React from "react";
import NumberInput from "../NumberInput/NumberInput";
import Button from "../Button/Button";
import Card from "../Card/Card";
import OperationRadioGroup from "../OperationRadioGroup/OperationRadioGroup";

import { useCalculator } from "./hook";

import "./Calculator.css";
import { FaPlus, FaTrash } from "react-icons/fa";

const Calculator = () => {
  const {
    rows,
    result,
    handleOperationChange,
    handleNumberChange,
    handleDisabledChange,
    handleAddRow,
    handleRemoveRow,
  } = useCalculator();

  return (
    <Card title={"React Challenge"}>
      <div className="calculator-container">
        {rows.map((row, index) => (
          <div
            key={index}
            className={`calculator-row ${row.disabled ? "disabled-row" : ""}`}
          >
            <div className="button-row">
              <OperationRadioGroup
                operation={row.operation}
                index={index}
                handleOperationChange={handleOperationChange}
              />
              <NumberInput
                value={row.number}
                onChange={(e) => handleNumberChange(index, e)}
              />
              <Button
                onClick={() => handleRemoveRow(index)}
                type="danger"
                icon={FaTrash}
              />
              <Button
                onClick={() => handleDisabledChange(index)}
                type={"disable"}
              >
                {row.disabled ? "Enable" : "Disable"}
              </Button>
            </div>
          </div>
        ))}
        <Button
          onClick={handleAddRow}
          icon={FaPlus}
          className="add-row-button"
          type="add"
        >
          Add Row
        </Button>
        <div>
          <strong>Result: {result}</strong>
        </div>
      </div>
    </Card>
  );
};

export default Calculator;
