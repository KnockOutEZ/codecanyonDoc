import ReactDOM from "react-dom"
import "../App.css"

const portal = document.getElementById("copyright")

const Copyright = (props) => {
    console.log(props.location)

    return ( 
    <>
    {ReactDOM.createPortal(<div className={`${props.location  === "/" ? "hidden1" : ""} text-center text-white`} style={{backgroundColor:"#16a086"}}>©Copyright 2020 <a style ={{color:"white"}} href="https://t1m9m.com" target="__blank">t1m9m</a>. All rights reserved.</div>,portal)}
    </>
     );
}
 
export default Copyright;