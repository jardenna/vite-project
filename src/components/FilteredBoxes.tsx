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
  const [selectedOption1, setSelectedOption1] = useState<string>('');
  const [selectedOption2, setSelectedOption2] = useState<string>('');
  const [selectedOption3, setSelectedOption3] = useState<string>('');

  const [options1, setoptions1] = useState(options);

  // Leg 1

  const handleSelectOption1 = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    const test1 = options.filter((option) => option.value !== value);
    setoptions1(test1);
    setSelectedOption1(value);
  };

  // Leg 2
  const remainingOptions2 = options1.filter(
    (option) => option.value !== selectedOption2
  );
  const handleSelectOption2 = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setSelectedOption2(value);
  };

  // Leg 3
  const remainingOptions3 = remainingOptions2.filter(
    (option) => option.value !== selectedOption3
  );

  const handleSelectOption3 = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setSelectedOption3(value);
  };

  const legs = [
    {
      id: 1,
      title: 'Leg 1',
      component: (
        <select value={selectedOption1} onChange={handleSelectOption1}>
          {options.map((option: Option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ),
    },
    {
      id: 2,
      title: 'Leg 2',
      component: (
        <select value={selectedOption2} onChange={handleSelectOption2}>
          {options1.map((option: Option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ),
    },
    // {
    //   id: 3,
    //   title: 'Leg 3',
    //   component: (
    //     <select value={selectedOption3} onChange={handleSelectOption3}>
    //       {remainingOptions2.map((option: Option) => (
    //         <option key={option.value} value={option.value}>
    //           {option.label}
    //         </option>
    //       ))}
    //     </select>
    //   ),
    // },
    // {
    //   id: 4,
    //   title: 'Leg 4',
    //   component: (
    //     <select>
    //       {remainingOptions3.map((option: Option) => (
    //         <option key={option.value} value={option.value}>
    //           {option.label}
    //         </option>
    //       ))}
    //     </select>
    //   ),
    // },
  ];
  return (
    <div>
      <div className="grid test grid-header">
        <div>Departure</div>
        <div>Arrival</div>
      </div>
      {legs.map((leg) => (
        <fieldset key={leg.id} className="grid test">
          <legend> {leg.title}</legend>

          <section className="pr-40"> {leg.component}</section>
          <section>Section 1</section>
          <section>Section 2</section>
          <section>Section 3</section>
        </fieldset>
      ))}
    </div>
    // <div>
    //   <select value={selectedOption1} onChange={handleSelectOption1}>
    //     {options.map((option: Option) => (
    //       <option key={option.value} value={option.value}>
    //         {option.label}
    //       </option>
    //     ))}
    //   </select>

    //   <select value={selectedOption2} onChange={handleSelectOption2}>
    //     {options1.map((option: Option) => (
    //       <option key={option.value} value={option.value}>
    //         {option.label}
    //       </option>
    //     ))}
    //   </select>
    //   <select value={selectedOption3} onChange={handleSelectOption3}>
    //     {remainingOptions2.map((option: Option) => (
    //       <option key={option.value} value={option.value}>
    //         {option.label}
    //       </option>
    //     ))}
    //   </select>

    //   <select>
    //     {remainingOptions3.map((option: Option) => (
    //       <option key={option.value} value={option.value}>
    //         {option.label}
    //       </option>
    //     ))}
    //   </select>
    // </div>
  );
};

export default FilteredSelectBoxes;
