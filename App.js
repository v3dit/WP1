import React from "react";
import "./App.css";
import { BrowserRouter ,Routes, Route } from "react-router-dom";
import Cart from "./wp1/Cart";
import Log from "./wp1/Log";
import Home from "./wp1/Home";
import Navbar from "./wp1/Navbar";


function App(){
  return(
    <div className="App">
      <Navbar/>
      <BrowserRouter>
      <Routes>
        
        <Route path="/log" element={<Log />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/" element={<Home />}/>
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

