import { Link } from "react-router-dom";
import classes from "./Header.module.css";

function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Avengers</div>
      <nav>
        <ul>
          <li>
            <Link to="#">{"Welcome User"}</Link>
          </li>
          <li>
            <Link to="/">Logout</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
