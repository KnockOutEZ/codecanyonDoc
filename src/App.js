import './App.css';
import { useEffect,useState  } from "react";
import { BrowserRouter, Route, Routes,useLocation  } from "react-router-dom";
import Main from "./Pages/Main";
import Installation from "./Pages/Installation";
import Frontend from "./Pages/Frontend";
import Backend from "./Pages/Backend";
import About from "./Pages/About";
import Navbar from "./components/Navbar";

function App() {
  let location

    if(window.location.pathname === "/"){
      location = "true"
    }else{
      location = "false"
    }



  console.log(location)

  

  return (
    
    <BrowserRouter>
      <Routes><Route exact path="/" element={<Main/>}></Route></Routes>
      <div  className={`${location=="true" ? "hidden" : ""}  md:flex flex-col md:flex-row md:min-h-screen w-full `}>
      <Navbar className={``}/>
    <div className='content container'>
    <Routes>
      <Route exact path="/frontend" element={<Frontend/>}></Route>
      <Route exact path="/installation" element={<Installation/>}></Route>
      <Route exact path="/backend" element={<Backend/>}></Route>
      <Route exact path="/about" element={<About/>}></Route>        
    </Routes>
    </div>
    <div className='fixed bottom-0 text-center w-screen bg-indigo-600 text-white'>Copyright 2020 t1m9m. All rights reserved.</div>
    </div>
    </BrowserRouter>
  );
}

export default App;
