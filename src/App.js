import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div class="md:flex flex-col md:flex-row md:min-h-screen w-full">
      <Navbar/>
    <div className='content container mx-auto'>
    <Routes>
      <Route exact path="/" element={<Layout/>}>
        </Route>
        <Route exact path="/qweqwe" element={<div>qwqwe123qwe</div>}>
        </Route>
        <Route exact path="/qweqweqwe" element={<div>qwqwqwegggge123qwe</div>}>
        </Route>
    </Routes>
    </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
