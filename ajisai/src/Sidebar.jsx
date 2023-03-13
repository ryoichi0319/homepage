import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Recruit from './components/Recruit/Recruit'
// import GoogleMapComponent from "./components/Access/Google";
import NotFound from "./components/NotFound";
import { elastic as Menu} from 'react-burger-menu';
import './Sidebar.css'
import './index.css'
import { useState,useRef,useEffect } from "react";
import styled from "styled-components"
import AddHomeIcon from '@mui/icons-material/AddHome';
import BusinessIcon from '@mui/icons-material/Business';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import Person3Icon from '@mui/icons-material/Person3';
import MapIcon from '@mui/icons-material/Map';
import { Google } from "@mui/icons-material";
import GoogleM1 from "./components/Access/GoogleM1";

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
   
    <div className="outer">
      
    <BrowserRouter  >
    
    <Menu pageWrapId={ "page-wrap" }
    isOpen={state.menuOpen} className="menu"
    onStateChange={(state) => handleClick(state)} right> 
    <ul  >
      
      <li className="menu-li">
        <NavLink activeClassName="active" exact to="/"   className="menu-item"
        onClick={()=>closeMenu()}>
        <AddHomeIcon />
          Home  
         
        </NavLink>
      </li>
      <li className="menu-li">
        <NavLink activeClassName="active" to="/about" className="menu-item" 
        onClick={()=>closeMenu()}>
          <BusinessIcon />
         
          About
         
        </NavLink>
      </li>
      <li className="menu-li">
        <NavLink activeClassName="active" to="/contact" className="menu-item" 
        onClick={()=>closeMenu()}>
          <AttachEmailIcon />
        Contact
        </NavLink>
      </li>
      <li className="menu-li">
        <NavLink activeClassName="active" to="/recruit" className="menu-item" 
        onClick={()=>closeMenu()}>
          <Person3Icon />
        Recruit
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/access"  className="menu-item"
        onClick={()=>closeMenu()}>
          <MapIcon/>
          Access
        </NavLink>
      </li>
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
        <Route path="/recruit">
        <Recruit />
        </Route>
        <Route path="/access">
        <GoogleM1 />
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