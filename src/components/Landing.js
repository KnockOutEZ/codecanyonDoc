import '../App.css';
import { useEffect,useState,forwardRef, useRef, useImperativeHandle   } from "react";
import { BrowserRouter, Route, Routes,useLocation  } from "react-router-dom";
import Main from "../Pages/Main";
import Installation from "../Pages/Installation";
import Frontend from "../Pages/Frontend";
import Backend from "../Pages/Backend";
import About from "../Pages/About";
import Navbar from "../components/Navbar";
import Copyright from "../components/Copyright";

const Landing = () => {
  let location = useLocation()

  const childRef = useRef()


    return ( 
        <div>
            <Routes><Route exact path="/" element={<Main/>}></Route></Routes>
      <div className={`${location.pathname  === "/" ? "hidden1" : ""} md:flex flex-col md:flex-row md:min-h-screen `}>
      <Navbar ref={childRef} className={``}/>
    <div onClick={() => childRef.current.getAlert()} className='content container mt-10'>
    <Routes>
      <Route exact path="/frontend" element={<Frontend/>}></Route>
      <Route exact path="/installation" element={<Installation/>}></Route>
      <Route exact path="/backend" element={<Backend/>}></Route>
      <Route exact path="/about" element={<About/>}></Route>        
    </Routes>
    <Copyright location = {location.pathname}></Copyright>
    </div>
    </div>
        </div>
     );
}
 
export default Landing;