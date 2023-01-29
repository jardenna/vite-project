import { FC, ReactNode } from 'react';

interface FigureProps {
  children: ReactNode;
}
const Figure: FC<FigureProps> = ({ children }) => (
  <figure className="figure">{children}</figure>
);
export default Figure;
