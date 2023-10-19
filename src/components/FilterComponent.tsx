import React, { useState } from 'react';

interface Option {
  value: string;
  label: string;
}

interface SelectValues {
  select1Value: string;
  select2Value: string;
  select3Value: string;
  select4Value: string;
}

const FilterComponent: React.FC = () => {
  const [selectValues, setSelectValues] = useState<SelectValues>({
    select1Value: '',
    select2Value: '',
    select3Value: '',
    select4Value: '',
  });

  const options: Option[] = [
    {
      value: 'apple',
      label: 'Apple',
    },
    {
      value: 'banana',
      label: 'Banana',
    },
    {
      value: 'orange',
      label: 'Orange',
    },
    {
      value: 'peach',
      label: 'Peach',
    },
    {
      value: 'plum',
      label: 'Plum',
    },
  ];

  const handleSelectChange = (key: keyof SelectValues, value: string) => {
    const updatedValues: SelectValues = {
      ...selectValues,
      [key]: value,
    };

    // Iterate over each select box
    Object.keys(updatedValues).forEach((selectKey) => {
      const currentKey = selectKey as keyof SelectValues;

      // Skip the current select box being changed
      if (currentKey === key) return;

      // Check if the value of the current select box matches the changed value
      if (updatedValues[currentKey] === value) {
        updatedValues[currentKey] = '';
      }
    });

    setSelectValues(updatedValues);
  };

  return (
    <div>
      <select
        value={selectValues.select1Value}
        onChange={(e) => {
          handleSelectChange('select1Value', e.target.value);
        }}
      >
        <option value="Select one">Select one</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <select
        value={selectValues.select2Value}
        onChange={(e) => {
          handleSelectChange('select2Value', e.target.value);
        }}
      >
        <option value="Select one">Select one</option>
        {options
          .filter((option) => option.value !== selectValues.select1Value)
          .map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
      </select>
      <select
        value={selectValues.select3Value}
        onChange={(e) => {
          handleSelectChange('select3Value', e.target.value);
        }}
      >
        <option value="Select one">Select one</option>
        {options
          .filter(
            (option) =>
              option.value !== selectValues.select1Value &&
              option.value !== selectValues.select2Value,
          )
          .map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
      </select>
      <select
        value={selectValues.select4Value}
        onChange={(e) => {
          handleSelectChange('select4Value', e.target.value);
        }}
      >
        <option value="Select one">Select one</option>
        {options
          .filter(
            (option) =>
              option.value !== selectValues.select1Value &&
              option.value !== selectValues.select2Value &&
              option.value !== selectValues.select3Value,
          )
          .map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
      </select>
    </div>
  );
};

export default FilterComponent;
