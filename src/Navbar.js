import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link className="link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="link" to="/projects">
            Projects
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
