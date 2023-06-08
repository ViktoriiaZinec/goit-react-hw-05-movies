import { NavLink, Outlet } from 'react-router-dom';
export const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <ul style={{ display: 'flex' }}>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/movies">Movies</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <div>
        <Outlet />
      </div>
    </>
  );
};
