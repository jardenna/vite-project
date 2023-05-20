import React, { useState } from 'react';

const MyComponent: React.FC = () => {
  const initialArray: string[] = ['banana', 'orange', 'apple', 'plum'];
  const [selectedValues, setSelectedValues] = useState<{
    first: string;
    second: string;
    third: string;
    fourth: string;
  }>({
    first: initialArray[0],
    second: initialArray[1],
    third: initialArray[2],
    fourth: initialArray[3],
  });

  const handleFirstSelectChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newFirstValue = event.target.value;

    setSelectedValues((prevValues) => {
      const updatedValues = { ...prevValues };

      Object.keys(updatedValues).forEach((key) => {
        if ((updatedValues as Record<string, string>)[key] === newFirstValue) {
          (updatedValues as Record<string, string>)[key] = '';
        }
      });

      return { ...updatedValues, first: newFirstValue };
    });
  };

  // Render the selects with event handlers
  return (
    <div>
      <select value={selectedValues.first} onChange={handleFirstSelectChange}>
        <option value="banana">Banana</option>
        <option value="orange">Orange</option>
        <option value="apple">Apple</option>
        <option value="plum">Plum</option>
      </select>

      {/* Render the other selects */}
      {/* ... */}

      {/* Render the updated array */}
      <pre>{JSON.stringify(Object.values(selectedValues), null, 2)}</pre>
    </div>
  );
};

export default MyComponent;
