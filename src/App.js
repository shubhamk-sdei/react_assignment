import Header from "./components/Header";
import Routes from "./Routes";
import { useSelector } from "react-redux";

function App() {
  const userData = useSelector((state) => state.updateUserData);
  console.log("the user from header", userData);
  return (
    <div>
      {userData.userName !== "" && <Header name={userData.userName} />}
      <Routes />
    </div>
  );
}

export default App;
