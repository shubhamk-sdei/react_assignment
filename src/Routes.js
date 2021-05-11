import { Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Hero from "./pages/Hero";
import Login from "./pages/Login";
function Routes() {
  return (
    <Switch>
      <Route path="/" exact>
        <Login />
      </Route>
      <Route path="/dash">
        <Dashboard />
      </Route>
      <Route path="/hero">
        <Hero />
      </Route>
    </Switch>
  );
}

export default Routes;
