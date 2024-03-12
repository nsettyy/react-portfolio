import { Link, useLocation } from "react-router-dom";
import "../styles/Nav.css";

function Nav() {
  const currentPage = useLocation().pathname;

  return (
    <header className="header">
      <ul>
        <li>Nick Settembrino</li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Projects">Projects</Link>
        </li>
        <li>
          <Link to="/Resume">Resume</Link>
        </li>
      </ul>
    </header>
  );
}

export default Nav;
