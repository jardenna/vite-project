import { FC, ReactNode } from 'react';

interface FigureProps {
  figcaption: string;
  children: ReactNode;
  imgSrc: string;
  altText?: string;
}
const Figure: FC<FigureProps> = ({ figcaption, children, imgSrc, altText }) => (
  <figure role="group" aria-labelledby="fig-t3-capt">
    <figcaption>{figcaption}</figcaption>
    <img src={imgSrc} alt={altText || ''} />
    {children}
  </figure>
);
export default Figure;
