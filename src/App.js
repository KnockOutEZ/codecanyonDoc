import './App.css';
import LandingPage from "./Pages/LandingPage";
import Copyright from "./components/Copyright";
import { Fragment } from 'react';
import React, { useState, useEffect } from 'react';

function App() {
  const [ spinner, setSpinner ] = useState(true);

  // It will be executed before rendering

  useEffect(() => {
    setTimeout(() => setSpinner(false), 1000)
  }, []);

  // [] means like componentDidMount
  return (
    <Fragment>
       {spinner && 
       <div className={`${spinner ? "opacityYes" : "opacityNo"} w-screen h-screen m-auto flex justify-center items-center`}>
       <img src="./835.gif"/>
         </div>
       } 
      {!spinner && <LandingPage/>}
    </Fragment>
  );
}

export default App;
