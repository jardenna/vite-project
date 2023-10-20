import { FC } from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';
import { Title } from '../enums';

interface UnderstandableProps {}
const Understandable: FC<UnderstandableProps> = () => {
  useDocumentTitle(Title.Understandable);
  return (
    <section>
      <h1>Understandable</h1>
    </section>
  );
};
export default Understandable;
