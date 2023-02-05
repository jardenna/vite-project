import { FC, useState } from 'react';
import Select from './Select';

const options = [
  {
    value: 'kai',
    label: 'Kai',
  },
  {
    value: 'nya',
    label: 'Nya',
  },
  {
    value: 'lloyd',
    label: 'Lloyd',
  },
  {
    value: 'zane',
    label: 'Zane',
  },
  {
    value: 'cole',
    label: 'Cole',
  },
  {
    value: 'jay',
    label: 'Jay',
  },
  {
    value: 'garmadon',
    label: 'Garmadon',
  },
];
const Wrapper: FC = () => {
  const [value, setValue] = useState('lloyd');
  console.log(value);
  return <Select options={options} value={value} onChange={setValue} />;
};
export default Wrapper;
