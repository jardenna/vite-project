import { FC } from 'react';

interface ImgProps {
  src: string;
  alt: string;
  className?: string;
}

const Img: FC<ImgProps> = ({ src, alt, className }) => (
  <img src={src} alt={alt} className={className} loading="lazy" />
);
export default Img;
