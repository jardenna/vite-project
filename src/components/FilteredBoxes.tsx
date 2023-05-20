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
  { value: 'carrot', label: 'Carrot' },
  //   { value: 'broccoli', label: 'Broccoli' },
  //   { value: 'cucumber', label: 'Cucumber' },
  //   { value: 'water', label: 'Water' },
  //   { value: 'juice', label: 'Juice' },
  //   { value: 'soda', label: 'Soda' },
];

const FilteredSelectBoxes = () => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const handleChange1 = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value, name } = event.target;

    setSelectedOptions([value]);
  };

  const handleChange2 = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value, name } = event.target;
    const x = selectedOptions.slice(0, 1);

    const y = [...x, value];

    setSelectedOptions(y);
  };

  const handleChange3 = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value, name } = event.target;

    const x = selectedOptions.slice(0, 2);

    const y = [...x, value];

    setSelectedOptions(y);
  };
  const handleChange4 = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value, name } = event.target;
    const x = selectedOptions.slice(0, 3);
    console.log(name, value);
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

  const [legsArray, setLegsArray] = useState(1);

  const legs = [
    {
      id: '1',
      title: 'Leg 1',
      component: (
        <>
          <select value={selectedOptions[0]} onChange={handleChange1} name="1">
            <option value="">Select an option</option>
            {options.map((option: Option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <section>Section 1</section>
          <section>Section 2</section>
          <section>Section 3</section>
        </>
      ),
    },
    {
      id: '2',
      title: 'Leg 2',
      component: (
        <>
          <select value={selectedOptions[1]} onChange={handleChange2} name="2">
            <option value="">Select an option</option>
            {getFilteredOptions(1).map((option: Option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <section>Section 1</section>
          <section>Section 2</section>
          <section>Section 3</section>
        </>
      ),
    },
    {
      id: '3',
      title: 'Leg 3',
      component: (
        <>
          <select value={selectedOptions[2]} onChange={handleChange3} name="3">
            <option value="">Select an option</option>
            {getFilteredOptions(2).map((option: Option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <section>Section 1</section>
          <section>Section 2</section>
          <section>Section 3</section>
        </>
      ),
    },
    {
      id: '4',
      title: 'Leg 4',
      component: (
        <>
          <select value={selectedOptions[3]} onChange={handleChange4} name="4">
            <option value="">Select an option</option>
            {getFilteredOptions(3).map((option: Option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <section>Section 1</section>
          <section>Section 2</section>
          <section>Section 3</section>
        </>
      ),
    },

    // {
    //   id: '5',
    //   title: 'Leg 5',
    //   component: (
    //     <>
    //       <select>
    //         {remainingOptions3.map((option: Option) => (
    //           <option key={option.value} value={option.value}>
    //             {option.label}
    //           </option>
    //         ))}
    //       </select>
    //       <section>Section 1</section>
    //       <section>Section 2</section>
    //       <section>Section 3</section>
    //     </>
    //   ),
    // },
    // {
    //   id: '6',
    //   title: 'Leg 6',
    //   component: (
    //     <>
    //       <select>
    //         {remainingOptions3.map((option: Option) => (
    //           <option key={option.value} value={option.value}>
    //             {option.label}
    //           </option>
    //         ))}
    //       </select>
    //       <section>Section 1</section>
    //       <section>Section 2</section>
    //       <section>Section 3</section>
    //     </>
    //   ),
    // },
    // {
    //   id: '7',
    //   title: 'Leg 7',
    //   component: (
    //     <>
    //       <select>
    //         {remainingOptions3.map((option: Option) => (
    //           <option key={option.value} value={option.value}>
    //             {option.label}
    //           </option>
    //         ))}
    //       </select>
    //       <section>Section 1</section>
    //       <section>Section 2</section>
    //       <section>Section 3</section>
    //     </>
    //   ),
    // },
  ];
  const test = legs.slice(0, legsArray);
  const handleAddLegs = () => setLegsArray((prevIndex) => prevIndex + 1);
  const handleRemoveLegs = () => setLegsArray((prevIndex) => prevIndex - 1);
  return (
    <div>
      <div className="grid test1 grid-header">
        <div className="grid test col-start-2">
          <div>Departure</div>
          <div className="col-start-3">Arrival</div>
        </div>
      </div>
      {test.map((leg, index: number) => (
        <fieldset key={leg.id} className="grid test1">
          <legend>{leg.title}</legend>
          <div className="grid test">{leg.component}</div>

          {test.length - 1 === index && index !== 0 && (
            <button type="button" onClick={handleRemoveLegs}>
              Delete
            </button>
          )}
        </fieldset>
      ))}

      <button
        onClick={handleAddLegs}
        type="button"
        className="btn btn-primary"
        disabled={test.length === 6}
      >
        Add Leg
      </button>
    </div>
  );
};

export default FilteredSelectBoxes;
