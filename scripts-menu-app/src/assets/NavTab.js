import React from 'react';
import { NavLink } from 'react-router-dom';

const NavTabs = () => {
  const tabs = [
    { path: '/', name: 'Run Script' },
    { path: '/progress', name: 'Progress' },
    { path: '/admin', name: 'Admin' },
  ];

  return (
    <nav className="nav nav-tabs">
      {tabs.map(tab => (
        <NavLink
          key={tab.path}
          to={tab.path}
          className={({ isActive }) => "nav-item nav-link" + (isActive ? " active" : "")}
          end={tab.path === '/'}
        >
          {tab.name}
        </NavLink>
      ))}
    </nav>
  );
};

export default NavTabs;