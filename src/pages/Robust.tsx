import { FC } from 'react';
import { Title } from '../enums';
import useDocumentTitle from '../hooks/useDocumentTitle';

interface RobustProps {}
const Robust: FC<RobustProps> = () => {
  useDocumentTitle(Title.Robust);
  return (
    <section>
      <h1>Robust</h1>
    </section>
  );
};
export default Robust;
