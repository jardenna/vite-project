import { FC } from 'react';
import { Title } from '../../enums';
import useDocumentTitle from '../../hooks/useDocumentTitle';

const Media: FC = () => {
  useDocumentTitle(Title.TimebasedMedia);
  return <section>Media</section>;
};
export default Media;
