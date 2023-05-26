import { useState, useEffect } from "react";

export const useCalculator = () => {

  const [rows, setRows] = useState([
    { operation: "+", number: 0, disabled: false },
  ]);

  const [result, setResult] = useState(0);

  const handleOperationChange = (index, value) => {
    const updatedRows = [...rows];
    updatedRows[index].operation = value;
    setRows(updatedRows);
  };

  const handleNumberChange = (index, value) => {
    const updatedRows = [...rows];
    updatedRows[index].number = value;
    setRows(updatedRows);
  };

  const handleDisabledChange = (index) => {
    const updatedRows = [...rows];
    updatedRows[index].disabled = !updatedRows[index].disabled;
    setRows(updatedRows);
  };

  const handleAddRow = () => {
    setRows([...rows, { operation: "+", number: 0, disabled: false }]);
  };

  const handleRemoveRow = (index) => {
    const updatedRows = [...rows];
    updatedRows.splice(index, 1);
    setRows(updatedRows);
  };

  const calculateResult = () => {
    let total = 0;
    rows.forEach((row) => {
      if (!row.disabled) {
        const { operation, number } = row;
        total = operation === "+" ? total + number : total - number;
      }
    });
    setResult(total);
  };

  useEffect(() => {
    calculateResult();
  }, [rows]);

  return {
    rows,
    handleRemoveRow,
    handleAddRow,
    handleDisabledChange,
    handleNumberChange,
    handleOperationChange,
    result,
  };
  
};
