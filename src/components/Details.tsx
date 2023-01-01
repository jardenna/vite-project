import { FC, ReactNode } from 'react';

interface DetailsProps {
  summary: string;
  children: ReactNode;
}
const Details: FC<DetailsProps> = ({ summary, children }) => (
  <details>
    <summary>{summary}</summary>
    {children}
  </details>
);
export default Details;
