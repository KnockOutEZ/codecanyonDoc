import Localhost from "../components/Localhost";
import Cpanel from "../components/Cpanel";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Installation = () => {
  AOS.init();
return ( 
        <div data-aos="fade-up">
          <h2 className="text-center my-10">Installation Procedure</h2>
          <br/>
            <Localhost/>
            <Cpanel/>
        </div>
     );
}
 
export default Installation;