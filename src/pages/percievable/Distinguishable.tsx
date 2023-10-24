import { FC } from 'react';
import { Title } from '../../enums';
import useDocumentTitle from '../../hooks/useDocumentTitle';

const Distinguishable: FC = () => {
  useDocumentTitle(Title.Distinguishable);
  return <section>Distinguishable</section>;
};
export default Distinguishable;
