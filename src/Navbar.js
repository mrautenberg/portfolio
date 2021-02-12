import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact activeClassName="link--active" className="link" to="/">
            Home
          </NavLink>
        </li>
      </ul>

      <ul>
        <li>
          <NavLink
            activeClassName="link--active"
            className="link"
            to="/projects"
          >
            Projects
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
