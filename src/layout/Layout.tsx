import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './Nav';

interface LayoutProps {}
const Layout: FC<LayoutProps> = () => (
  <section className="main-container">
    <header className="header">
      <article className="container">
        <h1>Auth Example using RouterProvider</h1>

        <Nav />
      </article>
    </header>

    <main className="container">
      <Outlet />
    </main>

    <footer className="container">
      © 2023 Startup Vite, All rights reserved.
    </footer>
  </section>
);
export default Layout;
