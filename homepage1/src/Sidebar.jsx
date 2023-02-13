import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
// import Wine from "./components/Wine";
import NotFound from "./components/NotFound";
import { elastic as Menu} from 'react-burger-menu';
import './Sidebar.css'
import './index.css'
import { useState,useRef,useEffect } from "react";
import styled from "styled-components"

function Sidebar() {
  const [state, setState] = useState({menuOpen:false})
  
    const handleClick = (state) =>{
  
      setState({menuOpen:state.isOpen})
    }
    const closeMenu =()=>{
      setState({menuOpen:false})
    }
  
  const toggleMenu =()=> {
    this.setState(state => ({menuOpen: !state.menuOpen}))
  }

 


  
  
  return (
   
    <div id="outer-container">
      
 
    <BrowserRouter  >
    
    <Menu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container"} 
    isOpen={state.menuOpen}
    onStateChange={(state) => handleClick(state)}> 
    <ul >
      
      <li>
        <NavLink activeClassName="active" exact to="/"   className="menu-item"
        onClick={()=>closeMenu()}>
        
          Home  
         
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/about" className="menu-item" 
        onClick={()=>closeMenu()}>
         
          About
         
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/contact" className="menu-item" 
        onClick={()=>closeMenu()}>
        Contact
        </NavLink>
      </li>
      {/* <li>
        <NavLink activeClassName="active" to="/wine"  className="menu-item" id="4">
          Wine
        </NavLink>
      </li> */}
    </ul>
   
    </Menu>
       <div id="page-wrap">
      <Switch>
      <Route exact path="/"  >
        <Home  />aaa
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/contact">
        <Contact />
        </Route>
        {/* <Route path="/wine">
        <Wine />
      </Route> */}
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