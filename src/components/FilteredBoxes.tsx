import React, { useState } from 'react';

type Option = {
  value: string;
  label: string;
};

const options: Option[] = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'orange', label: 'Orange' },
  { value: 'peach', label: 'Peach' },
  //   { value: 'plum', label: 'Plum' },
  //   { value: 'carrot', label: 'Carrot' },
  //   { value: 'broccoli', label: 'Broccoli' },
  //   { value: 'cucumber', label: 'Cucumber' },
  //   { value: 'water', label: 'Water' },
  //   { value: 'juice', label: 'Juice' },
  //   { value: 'soda', label: 'Soda' },
];

const FilteredSelectBoxes = () => {
  const [selectedOption1, setSelectedOption1] = useState<string>('');
  const [selectedOption2, setSelectedOption2] = useState<string>('');
  const remainingOptions1: Option[] = options.filter(
    (option: Option) => option.value !== selectedOption1
  );
  const remainingOptions2: Option[] = remainingOptions1.filter(
    (option: Option) => option.value !== selectedOption2
  );
  const handleSelectOption1 = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption1(event.target.value);
    setSelectedOption2('');
  };
  const handleSelectOption2 = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption2(event.target.value);
  };
  return (
    <div>
      <select value={selectedOption1} onChange={handleSelectOption1}>
        <option value="">Select an option</option>
        {options.map((option: Option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <select value={selectedOption2} onChange={handleSelectOption2}>
        <option value="">Select an option</option>
        {remainingOptions1.map((option: Option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <select>
        <option value="">Select an option</option>
        {remainingOptions2.map((option: Option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilteredSelectBoxes;
