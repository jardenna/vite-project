import React, { useState } from 'react';

type Option = {
  value: string;
  label: string;
};

const options: Option[] = [
  {
 value: 'apple', label: 'Apple' 
},
  {
 value: 'banana', label: 'Banana' 
},
  {
 value: 'orange', label: 'Orange' 
},
  {
 value: 'peach', label: 'Peach' 
},
  {
 value: 'plum', label: 'Plum' 
},
];

const MyComponent: React.FC = () => {
  const test = options.map((opt) => opt.value);

  const initialArray: string[] = test;
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
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const handleFirstSelectChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const { value } = event.target;
    setSelectedValues((prevValues) => {
      const updatedValues = {
 ...prevValues 
};

      Object.keys(updatedValues).forEach((key) => {
        if ((updatedValues as Record<string, string>)[key] === value) {
          (updatedValues as Record<string, string>)[key] = '';
        }
      });
      const x = selectedOptions.slice(0, 1);

      const y = [...x, value];

      setSelectedOptions(y);
      return {
 ...updatedValues, first: value 
};
    });
  };
  const handleSecondSelectChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const { value } = event.target;
    setSelectedValues((prevValues) => {
      const updatedValues = {
 ...prevValues 
};

      Object.keys(updatedValues).forEach((key) => {
        if ((updatedValues as Record<string, string>)[key] === value) {
          (updatedValues as Record<string, string>)[key] = '';
        }
      });
      const x = selectedOptions.slice(0, 2);

      const y = [...x, value];

      setSelectedOptions(y);
      return {
 ...updatedValues, second: value 
};
    });
  };
  const handleThirdSelectChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const { value } = event.target;
    setSelectedValues((prevValues) => {
      const updatedValues = {
 ...prevValues 
};

      Object.keys(updatedValues).forEach((key) => {
        if ((updatedValues as Record<string, string>)[key] === value) {
          (updatedValues as Record<string, string>)[key] = '';
        }
      });
      const x = selectedOptions.slice(0, 3);

      const y = [...x, value];

      setSelectedOptions(y);
      return {
 ...updatedValues, third: value 
};
    });
  };
  const getFilteredOptions = (index: number): Option[] => {
    const selectedValues1 = selectedOptions.slice(0, index);
    const remainingOptions = options.filter(
      (option) => !selectedValues1.includes(option.value),
    );
    return remainingOptions;
  };
  // Render the selects with event handlers
  return (
    <div>
      <select value={selectedValues.first} onChange={handleFirstSelectChange}>
        <option value="">Select an option</option>
        {options.map((option: Option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <select value={selectedValues.second} onChange={handleSecondSelectChange}>
        <option value="">Select an option</option>
        {getFilteredOptions(1).map((option: Option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <select value={selectedValues.third} onChange={handleThirdSelectChange}>
        <option value="">Select an option</option>
        {getFilteredOptions(2).map((option: Option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {/* Render the updated array */}
      <pre>{JSON.stringify(Object.values(selectedValues))}</pre>
    </div>
  );
};

export default MyComponent;
