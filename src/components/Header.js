import { useHistory } from "react-router-dom";
import classes from "./Header.module.css";
import { useDispatch } from "react-redux";
import { removeUser } from "../dataStore/actions";

function Header(props) {
  const dispatch = useDispatch();
  let history = useHistory();

  function logout() {
    dispatch(removeUser());
    history.push("/");
  }

  function goToList() {
    history.push("/dash");
  }

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Avengers</div>
      <nav>
        <ul>
          <li onClick={goToList}>{`Welcome ${props.name}`}</li>
          <li onClick={logout}>Logout</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
