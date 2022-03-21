import FancyButton from "../components/FancyButton.js"
import Slide from 'react-reveal/Slide';

const Main = () => {
    let props = {
        color: "#FFFFFF",
        width: 410,
        height: 100,
        fontSize: 40,
        borderWidth: 15,
      };

      let propsForMobile = {
        color: "#FFFFFF",
        width: 205,
        height: 50,
        fontSize: 20,
        borderWidth: 7.5,
      };

    return ( 
        <div>
            {/* bg-gray-200 */}
            <div className="myBg">
                <div className="mx-auto flex-col flex items-center justify-center h-screen">
                    <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10 text-center">
                        <h8 className="mx-auto text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-800 font-black md:leading-tight">
                        <h9 style={{color:"white"}} className="">Venus</h9> <br/> <h9 className="text-gray-300">Alumni Association</h9>
                        </h8>
                        <p className="mt-5 sm:mt-10 lg:w-10/12 text-gray-200 font-normal text-center text-sm sm:text-lg">A professonal website drives sales. Create a beautiful website to impress and engage new customers and establish your business online </p>
                    </div>
                    <div className="justify-center items-center">
                        <div className="md:block hidden">
                        <FancyButton  color = {props.color} width = {props.width} height = {props.height} fontSize = {props.fontSize} borderWidth = {props.borderWidth} />
                        </div>
                        <div className="md:hidden block">
                        <FancyButton  color = {propsForMobile.color} width = {propsForMobile.width} height = {propsForMobile.height} fontSize = {propsForMobile.fontSize} borderWidth = {propsForMobile.borderWidth} />
                        </div>

                        
                        {/* <button className="ml-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-transparent transition duration-150 ease-in-out hover:border-indigo-600 lg:text-xl lg:font-bold  hover:text-indigo-600 rounded border border-indigo-700 text-indigo-700 px-4 sm:px-10 py-2 sm:py-4 text-sm">Live Demo</button> */}
                    </div>
                </div>
            </div>
        
        </div>
     );
}
 
export default Main;