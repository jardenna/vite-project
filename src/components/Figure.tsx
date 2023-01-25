import { FC } from 'react';

interface FigureProps {
  figcaption: string;
  imgSrc: string;
  altText?: string;
}
const Figure: FC<FigureProps> = ({ figcaption, imgSrc, altText }) => (
  <figure>
    <img src={imgSrc} alt={altText || ''} />
    <figcaption>{figcaption}</figcaption>
  </figure>
);
export default Figure;
