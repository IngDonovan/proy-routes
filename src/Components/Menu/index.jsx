import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Menu.css'

function Menu() {
  return (
    <nav>
      <ul>
      {routes2.map(route => (
          <li key={route.id}>
            <NavLink
              
              style={({ isActive }) => ({
                color: isActive ? 'red' : 'blue',
              })}
              to={route.to}
              end
            >
              {route.text}
            </NavLink>
          </li>
        ))}
        {/* <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li> */}

        {/* <li>
          <NavLink
            className={({ isActive }) => ()}
            style={({ isActive }) => ({
              color: isActive ? 'red' : 'blue',
            })}
            to="/"
          >Home</NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? 'red' : 'blue',
            })}
            to="/blog"
          >Blog</NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? 'red' : 'blue',
            })}
            to="/profile"
          >Profile</NavLink>
        </li> */}

      </ul>
    </nav>
  );
}

const routes = [];
routes.push({
  to: '/',
  text: 'Home',
});
routes.push({
  to: '/blog',
  text: 'Blog',
});
routes.push({
  to: '/profile',
  text: 'Profile',
});

const routes2 = [
  {
    id:1,
    to: '/',
    text: 'Home',
  },
  {
    id:2,
    to: '/blog',
    text: 'Blog',
  },
  {
    id:3,
    to: '/profile',
    text: 'Profile',
  },
  {
    id:4,
    to: '/login',
    text: 'Login',
  },
  {
    id:5,
    to: '/logout',
    text: 'Logout',
  },
];

export { Menu };