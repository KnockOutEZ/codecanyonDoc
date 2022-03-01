import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route index  element={<Layout />}>
        h1
        </Route>
      </Routes>
      navstart
    Switch
      navend
    </BrowserRouter>
  );
}

export default App;
