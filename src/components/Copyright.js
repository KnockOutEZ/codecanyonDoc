import ReactDOM from "react-dom"
import "../App.css"

const portal = document.getElementById("copyright")

const Copyright = (props) => {
    console.log(props.location)

    return ( 
    <>
    {/* {ReactDOM.createPortal( */}
    <div style ={{color:"#16A086"}} className={`${props.location  === "/" ? "hidden1" : ""} text-center`}>©Copyright 2020 <a href="https://t1m9m.com" target="__blank">t1m9m</a>. All rights reserved.</div>
    {/*,portal)}*/}
    </>
     );
}
 
export default Copyright;