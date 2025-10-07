import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar glass-like-background" aria-label="Main Navigation">
    <div className="nav-container">
      <img
        src="src/assets/icons/full-dark-huddle-icon.svg"
        alt="project logo"
        className="nav-logo"
      />
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="nav-buttons">
        <button className="btn btn-signin">Sign In</button>
        <button className="btn btn-signup">Sign Up</button>
      </div>
    </div>
  </nav>
);

export default Navbar;
