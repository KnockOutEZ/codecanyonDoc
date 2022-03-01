import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      navstart
    <div className='content'>
    <Routes>
      <Route exact path="/" element={<Layout/>}>
        </Route>
        <Route exact path="/qweqwe" element={<div>qwqwe123qwe</div>}>
        </Route>
        <Route exact path="/qweqweqwe" element={<div>qwqwqwegggge123qwe</div>}>
        </Route>
    </Routes>
    </div>
      navend
    </BrowserRouter>
  );
}

export default App;
