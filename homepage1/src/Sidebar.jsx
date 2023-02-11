import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import NotFound from "./components/NotFound";
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css'
import './index.css'
import { useState } from "react";


function Sidebar() {
  const [power,setPower] = useState(false);

    
  return (
    <div id="outer-container">
    <BrowserRouter>
    <Menu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } >
     
    <ul>
      <li>
        <NavLink activeClassName="active" exact to="/" className="menu-item">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/about" className="menu-item">
          About
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/contact" className="menu-item">
          Contact
        </NavLink>
      </li>
    </ul>
   
    </Menu>
       <div id="page-wrap">
      <Switch>
      <Route exact path="/" >
        <Home  />aaa
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route>
        <NotFound />
      </Route>
      </Switch>
      </div>
    </BrowserRouter>
    </div>
   
  );
}



export default Sidebar