import { FC } from 'react';
import { Title } from '../enums';
import useDocumentTitle from '../hooks/useDocumentTitle';

interface OperableProps {}
const Operable: FC<OperableProps> = () => {
  useDocumentTitle(Title.Operable);
  return (
    <section>
      <h1>Operable</h1>
    </section>
  );
};
export default Operable;
