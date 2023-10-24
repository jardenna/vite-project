import { FC } from 'react';
import { Title } from '../../enums';
import useDocumentTitle from '../../hooks/useDocumentTitle';

const Adaptable: FC = () => {
  useDocumentTitle(Title.Adaptable);
  return <section>Adaptable</section>;
};
export default Adaptable;
