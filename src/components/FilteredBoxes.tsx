import React, { useState } from 'react';

type Option = {
  value: string;
  label: string;
};
interface SelectValues {
  select1Value: string;
  select2Value: string;
  select3Value: string;
  select4Value: string;
}
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

const selectValueNames = {
  select1Value: '',
  select2Value: '',
  select3Value: '',
  select4Value: '',
};
const FilteredSelectBoxes = () => {
  const [selectValues, setSelectValues] =
    useState<SelectValues>(selectValueNames);
  const [options2, setoptions2] = useState(options);
  const [options3, setoptions3] = useState(options);
  const [options4, setoptions4] = useState(options);

  const handleSelectChange = (key: keyof SelectValues, value: string) => {
    const updatedValues: SelectValues = {
      ...selectValues,
      [key]: value,
    };

    // Set Options based on filtered previous options
    const opt2 = options.filter((a) => a.value !== updatedValues.select1Value);
    setoptions2(opt2);

    const opt3 = opt2.filter((a) => a.value !== updatedValues.select2Value);
    setoptions3(opt3);

    const opt4 = opt3.filter((a) => a.value !== updatedValues.select3Value);
    setoptions4(opt4);

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

  const [legsArray, setLegsArray] = useState(1);

  const legs = [
    {
      id: '1',
      title: 'Leg 1',
      component: (
        <>
          <select
            value={selectValues.select1Value}
            onChange={(e) => handleSelectChange('select1Value', e.target.value)}
          >
            <option value="Select one">Select one</option>
            {options.map((option) => (
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
          <select
            value={selectValues.select2Value}
            onChange={(e) => handleSelectChange('select2Value', e.target.value)}
          >
            <option value="Select one">Select one</option>
            {options2.map((option) => (
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
          <select
            value={selectValues.select3Value}
            onChange={(e) => handleSelectChange('select3Value', e.target.value)}
          >
            <option value="Select one">Select one</option>
            {options3.map((option) => (
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
          <select
            value={selectValues.select4Value}
            onChange={(e) => handleSelectChange('select4Value', e.target.value)}
          >
            <option value="Select one">Select one</option>
            {options4.map((option) => (
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
