import { Link } from "react-router-dom";


const Main = () => {
    return ( 
        <div>
            <div class="bg-gray-200 h-screen">
                <div class="mx-auto flex-col flex items-center justify-center h-screen">
                    <div class="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10 text-center">
                        <h8 class="mx-auto text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-800 font-black md:leading-tight">
                        <h9 class="text-indigo-700">Venus </h9> <br/> Alumni Association
                        </h8>
                        <p class="mt-5 sm:mt-10 lg:w-10/12 text-gray-700 font-normal text-center text-sm sm:text-lg">A professonal website drives sales. Create a beautiful website to impress and engage new customers and establish your business online </p>
                    </div>
                    <div class="flex justify-center items-center">
                        <Link to="/installation" class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 lg:text-xl lg:font-bold  rounded text-white px-4 sm:px-10 border border-indigo-700 py-2 sm:py-4 text-sm">Get Started</Link>
                        <button class="ml-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-transparent transition duration-150 ease-in-out hover:border-indigo-600 lg:text-xl lg:font-bold  hover:text-indigo-600 rounded border border-indigo-700 text-indigo-700 px-4 sm:px-10 py-2 sm:py-4 text-sm">Live Demo</button>
                    </div>
                </div>
            </div>
        
        </div>
     );
}
 
export default Main;