import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Pages/Main";
import Installation from "./Pages/Installation";
import Frontend from "./Pages/Frontend";
import Backend from "./Pages/Backend";
import About from "./Pages/About";
// import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div class="md:flex flex-col md:flex-row md:min-h-screen w-full">
      {/* <Navbar/> */}
    <div className='content container'>
    <Routes>
      <Route exact path="/" element={<Main/>}></Route>
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
