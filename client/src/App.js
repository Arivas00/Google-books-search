import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Searched from "./pages/Searched";
import Saved from "./pages/Saved";
import NavbarComp from "./components/NavbarComp"

function App() {
  return (
    <Router>
      <div>
        <NavbarComp />
        <Switch>
          <Route exact path="/" component={Searched} />
          <Route exact path="/saved" component={Saved} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
