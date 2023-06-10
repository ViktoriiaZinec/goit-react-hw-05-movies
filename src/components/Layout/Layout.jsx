import { NavLink, Outlet } from 'react-router-dom';
import css from './Layout.module.css';
import { Suspense } from 'react';
export const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <ul className={css.list}>
            <li className={css.list_item}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? css.active : undefined
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className={css.list_item}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? css.active : undefined
                }
                to="/movies"
              >
                Movies
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
