import Login from "./Components/Login";
import Home from "./Components/Home";
import "./style/app.css";

import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Switch>
      <Route path="/home" component={Home}></Route>
      <Route path="/" component={Login}></Route>
    </Switch>
  );
};

export default App;
