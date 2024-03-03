import { FC } from 'react';
import { Outlet } from 'react-router-dom';

const Chess: FC = () => (
  <div>
    <h1>Chess</h1>

    <Outlet />
  </div>
);
export default Chess;
