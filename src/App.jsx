import Login from "./Components/Login";
import Home from "./Components/Home";
import Question from "./Components/Question";
import { Route, Switch } from "react-router-dom";
import "./style/app.css";

const App = () => {
  return (
    // <div>
    //   <Question
    //     user={"useer"}
    //     description={"description"}
    //     comments={"test"}
    //   ></Question>
    // </div>

    <Switch>
      <Route path="/home" component={Home}></Route>
      <Route path="/" component={Login}></Route>
    </Switch>
  );
};

export default App;
