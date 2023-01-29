import { FC, ReactNode } from 'react';

interface FigcaptionProps {
  children: ReactNode;
}

const Figcaption: FC<FigcaptionProps> = ({ children }) => (
  <figcaption>{children}</figcaption>
);
export default Figcaption;
