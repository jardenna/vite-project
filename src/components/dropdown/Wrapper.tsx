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
  const [val, setVal] = useState('lloyd');

  return <Select options={options} value={val} onChange={setVal} />;
};
export default Wrapper;
