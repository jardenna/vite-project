import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import Select from 'react-select';

const options = [
  { value: 1, label: 'Chihuahua' },
  { value: 2, label: 'Bulldog' },
  { value: 3, label: 'Dachshund' },
  { value: 4, label: 'Akita' },
];

const FilterSelect = () => {
  const [options1, setOption1] = React.useState<any>(options);
  const [options2, setOption2] = React.useState<any>(options);

  return (
    <>
      <Select
        options={options1}
        onChange={(v1: any) => {
          setOption2(options.filter((o2) => o2 !== v1));
        }}
      />
      <div style={{ height: 30 }} />
      <Select
        options={options2}
        onChange={(v2: any) => {
          setOption1(options.filter((o1) => o1 !== v2));
        }}
      />
    </>
  );
};

export default FilterSelect;
