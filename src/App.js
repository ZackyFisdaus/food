import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./containers/home/home";
import DashFood from "./containers/dashfood/dashFood";
import DashResto from "./containers/dashresto/dashResto";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/dashfood" component={DashFood} />
        <Route path="/dashresto" component={DashResto} />
      </Switch>
    </div>
  );
}

export default App;
