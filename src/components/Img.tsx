import { FC } from 'react';

interface ImgProps {
  imgSrc: string;
  altText?: string;
  className?: string;
}

const Img: FC<ImgProps> = ({ imgSrc, altText, className }) => (
  <img src={imgSrc} alt={altText || ''} className={className} />
);
export default Img;
