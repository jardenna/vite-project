import { FC, useState } from 'react';
import Select from './Select';

const options = [
  {
    name: 'kai',
  },
  {
    name: 'nya',
  },
  {
    name: 'lloyd',
  },
  {
    name: 'zane',
  },
  {
    name: 'cole',
  },
  {
    name: 'jay',
  },
  {
    name: 'garmadon',
  },
];
const Wrapper: FC = () => {
  const [value, setValue] = useState('lloyd');
  console.log(value);
  return (
    <Select options={options} val={value} onChange={setValue} keys="name" />
  );
};
export default Wrapper;
