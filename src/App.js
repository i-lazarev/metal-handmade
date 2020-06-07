import React from "react";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import Bedroom from "./Pages/Bedroom";
import LivingRoom from "./Pages/LivingRoom";
import Decor from "./Pages/Decor";
import Logo from "./Components/Logo";

const App = () => {
  return (
    <div className="App">
      <Logo />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/bedroom" component={Bedroom} />
        <Route path="/livingroom" component={LivingRoom} />
        <Route path="/decor" component={Decor} />
      </Switch>
      <NavBar />
    </div>
  );
};

export default App;
