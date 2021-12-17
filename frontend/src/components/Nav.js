import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div>
      <nav className="navigation">
        <Link to="/">
          <h1>Social Post</h1>
        </Link>
        <ul>
          <Link className="create" to="/createpost">
            <li>Create Post</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;