import { FC, ReactNode } from 'react';
import Img from '../Img';

interface FigureProps {
  src: string;
  alt: string;
  children: ReactNode;
  className?: string;
}

const Figure: FC<FigureProps> = ({ src, alt, children, className = '' }) => (
  <figure className="figure">
    <Img src={src} alt={alt} className={className} />
    <figcaption>{children}</figcaption>
  </figure>
);
export default Figure;
