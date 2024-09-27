import React, { useState, useEffect } from "react";

import './App.css'

import Home from "./NavBar/Home/Home";
import About from "./NavBar/About/About";
import Explorer from "./NavBar/Explorer/Explorer";
import Contact from "./NavBar/Contact/Contact";
import Navbar from "./NavBar/Navbar";

function App() {
  const [component, setComponent] = useState(<Home />);

  useEffect(() => {
    switch (window.location.pathname) {
      case '/home':
        setComponent(<Home />);
        break;
      case '/about':
        setComponent(<About />);
        break;
      case '/explorer':
        setComponent(<Explorer />);
        break;
      case '/contact':
        setComponent(<Contact />);
        break;
      default:
        setComponent(<Home />); 
    }
  }, [window.location.pathname]);

  return (
    <div>
      <Navbar />
      <div>{component}</div>

      <div>
        <h1 className='nameText'>Name: Giorgi</h1>
        <h1 className='lastnameText'>LastName: Giorgi</h1>
        <h1 className='ageText'>Age: 12</h1>
        <h1 className='hobbyText'>hobby: Programming</h1>
      </div>
    </div>
  );
}

export default App;
