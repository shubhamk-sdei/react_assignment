import { useHistory } from "react-router-dom";
import classes from "./Header.module.css";
import { useDispatch } from "react-redux";
import { removeUser } from "../dataStore/actions";

function Header(props) {
  const dispatch = useDispatch();
  let history = useHistory();

  function redirect(e) {
    dispatch(removeUser());
    history.push("/");
    e.preventDefault();
  }

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Avengers</div>
      <nav>
        <ul>
          <li>{`Welcome ${props.name}`}</li>
          <li onClick={redirect}>Logout</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
