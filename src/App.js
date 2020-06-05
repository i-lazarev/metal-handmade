import React from "react";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Furniture from "./Pages/Furniture";
import Contact from "./Pages/Contact";
import { Route, Switch } from "react-router-dom";
import Categories from "./Components/Categories";


const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Home/>
      <Categories/>
      {/* <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/furniture" component={Furniture} />
        <Route path="/contact" component={Contact} />
      </Switch> */}
    </div>
  );
};

export default App;
