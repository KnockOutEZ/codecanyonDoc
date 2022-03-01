import { Link } from "react-router-dom";
import { useEffect, useState  } from "react";

const Layout = () => {
    // const id = '1PXA-tOul7WX3Q68xkeR5QZjH-y6ZaRHVqfC8RWycJN4';
//   const gid = '0';
//   const url = 'https://docs.google.com/spreadsheets/d/'+id+'/gviz/tq?tqx=out:json&tq&gid='+gid;
//   let docData = ""
//   fetch(url)
//   .then(response => response.text())
//   .then(data => document.getElementById("json").innerHTML=data
//   );

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