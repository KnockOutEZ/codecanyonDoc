import '../App.css';
import { useEffect,useState  } from "react";
import { BrowserRouter, Route, Routes,useLocation  } from "react-router-dom";
import Main from "../Pages/Main";
import Installation from "../Pages/Installation";
import Frontend from "../Pages/Frontend";
import Backend from "../Pages/Backend";
import About from "../Pages/About";
import Navbar from "../components/Navbar";
import Landing from "../components/Landing";

const LandingPage = () => {
//     let [location,setLocation] = useState(false)
//     useEffect(() => {
// setLocation(window.location.pathname === "/")
//       console.log(window.location.pathname);
//     }, [window.location]);

    return ( 
        <BrowserRouter>
      <Landing/>
    </BrowserRouter>
     );
}
 
export default LandingPage;