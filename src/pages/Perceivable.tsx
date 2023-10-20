import { FC } from 'react';
import { Title } from '../enums';
import useDocumentTitle from '../hooks/useDocumentTitle';

interface PerceivableProps {}
const Perceivable: FC<PerceivableProps> = () => {
  useDocumentTitle(Title.Perceivable);
  return (
    <section>
      <h1>Perceivable</h1>
    </section>
  );
};
export default Perceivable;
