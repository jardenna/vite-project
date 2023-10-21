import { FC } from 'react';
import { Title } from '../enums';
import useDocumentTitle from '../hooks/useDocumentTitle';

interface PerceivableProps {}
const Perceivable: FC<PerceivableProps> = () => {
  useDocumentTitle(Title.Perceivable);
  return (
    <>
      <aside className="left-menu">Menu Alternative text</aside>
      <section>
        <h1>Perceivable</h1>

        <p>
          Information and user interface components must be presentable to users
          in ways they can perceive. Perceivable states that users must be able
          to perceive it in some way, using one or more of their senses.
        </p>
      </section>
    </>
  );
};
export default Perceivable;
