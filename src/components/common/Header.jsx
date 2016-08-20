import React from 'react';
import {Link} from 'react-router';

class Header extends React.Component {
  render () {
    return (
      <div>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand">Things</Link>
            <ul className="nav navbar-nav">
              <li><Link to="about">About</Link></li>
              <li><Link to="courses">Courses</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
