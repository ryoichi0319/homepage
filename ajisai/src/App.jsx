import React from 'react';
import Sidebar from './Sidebar';
import './App.css';
import Slider from './components/Slider';
import Header from './Header/Header'


import { useState } from 'react';
function App() {
  console.log(import.meta.env.VITE_HELLO_WORLD) 
  return (
    <div className="App" >
      
      <div className='header1'> 
      
      <Header />     
      </div>
      <div className='side1'>
      <Sidebar  />
      </div>
      
      <li>{import.meta.env.VITE_HELLO_WORLD}</li>
    </div>
  );
}

export default App;