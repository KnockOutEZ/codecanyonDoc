import { Link } from "react-router-dom";
import { useEffect, useState  } from "react";

const Layout = () => {

const [data, setData] = useState();


  const getData = async () => {
    try {
      const res = await fetch(
        "https://sheet.best/api/sheets/ab7867ce-e111-4f2e-aaad-8f0008ffa6ab"
      );
      const data = await res.json();
      setData(Object.keys(data).map((key) => data[key]));
    console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
return ( 

    
        // <Link to="/contact">Contact</Link>
        <div>
            {data?.map((item, i) => (
              <div>
                {item.IGN}
              </div>
            ))},
            qweqweqwe
        </div>
     );
}
 
export default Layout;