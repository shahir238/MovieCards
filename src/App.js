import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//import Gaurdian from "./Gaurdian";
import Joker from "./Joker";
import Home from "./Home";
import World from "./World";
import King from "./King";
import BFG from "./BFG";
import Brides from "./Brides";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Pages from "./Pages";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Pages} />
        <Route exact path="/SignUp" component={SignUp} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/Joker" component={Joker} />
        <Route exact path="/World" component={World} />
        <Route exact path="/King" component={King} />
        <Route exact path="/BFG" component={BFG} />
        <Route exact path="/Brides" component={Brides} />
        <Route exact path="/SignIn" component={SignIn} />
        {/* <Route exact path="/world" component={World} /> */}
      </Switch>
    </Router>
  );
}

export default App;
