import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

const About = () => {
  AOS.init();
  return (
    <div data-aos="fade-up" className="md:grid grid-cols-2 mt-10">
      <div id="techs">
      <div className="text-center">
      <h2 className="text-center my-5 text-md">Technologies Used</h2>
      <h6 className="text-sm">1. Codeigniter Framework: Version 3.1.5</h6>
      <h6 className="text-sm">2. MySQL database</h6>
      <h6 className="text-sm">3. Apache web server</h6>
      <h6 className="text-sm">4. PHP 7.1+</h6>
      </div>

      <div className="text-center" id="logincreds">
      <h2 className="text-center my-5">Default Login Credentials</h2>
      <h6 className="text-sm">Email: admin@venus.com</h6>
      <h6 className="text-sm">Password: admin</h6>
      </div>
      
      <div className="text-center" id="support">
      <h2 className="text-center my-5">Support</h2>
      <h6 className="text-sm"> Please email for any kind of support <a href="mailto:t1m9m.com@gmail.com">t1m9m.com@gmail.com</a></h6>
      </div>

      <div className="text-center" >
      <h2 className="text-center my-10">Thank you for buying the script.</h2>
      </div>
      </div>

      <div className="m-auto">
          <img src="hero.png"/>
      </div>

      
    </div>
  );
};

export default About;
