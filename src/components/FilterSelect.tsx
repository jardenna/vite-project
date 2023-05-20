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
  { value: 'plum', label: 'Plum' },
];

const FilterSelect: React.FC = () => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleChange1 = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;

    setSelectedOptions([value]);
  };

  const handleChange2 = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    const x = selectedOptions.slice(0, 1);

    const y = [...x, value];

    setSelectedOptions(y);
  };

  const handleChange3 = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;

    const x = selectedOptions.slice(0, 2);

    const y = [...x, value];

    setSelectedOptions(y);
  };
  const handleChange4 = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    const x = selectedOptions.slice(0, 3);

    const y = [...x, value];

    setSelectedOptions(y);
  };
  const getFilteredOptions = (index: number): Option[] => {
    const selectedValues = selectedOptions.slice(0, index);
    const remainingOptions = options.filter(
      (option) => !selectedValues.includes(option.value)
    );
    return remainingOptions;
  };

  return (
    <div>
      <select value={selectedOptions[0]} onChange={handleChange1}>
        <option value="">Select an option</option>
        {options.map((option: Option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <select value={selectedOptions[1]} onChange={handleChange2}>
        <option value="">Select an option</option>
        {getFilteredOptions(1).map((option: Option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <select value={selectedOptions[2]} onChange={handleChange3}>
        <option value="">Select an option</option>
        {getFilteredOptions(2).map((option: Option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <select value={selectedOptions[3]} onChange={handleChange4}>
        <option value="">Select an option</option>
        {getFilteredOptions(3).map((option: Option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterSelect;
