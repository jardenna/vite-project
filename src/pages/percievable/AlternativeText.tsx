import { FC } from 'react';
import { Title } from '../../enums';
import useDocumentTitle from '../../hooks/useDocumentTitle';

const AlternativeText: FC = () => {
  useDocumentTitle(Title.AlternativeText);
  return <section>AlternativeText</section>;
};
export default AlternativeText;
