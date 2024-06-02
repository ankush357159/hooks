import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import the CSS file

const Header = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">External Data</Link></li>
        <li><Link to="/dom-manipulation">DOM Manipulation</Link></li>
        <li><Link to="/chart">Geo Chart</Link></li>
        <li><Link to="/event-listener">Event Listener</Link></li>
        <li><Link to="/debounce">Debounced Input</Link></li>
        <li><Link to="/custom-hook">Use Fetch</Link></li>
      </ul>
    </nav>
  );
};

export default Header;
