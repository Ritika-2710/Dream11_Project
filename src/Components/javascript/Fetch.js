import { useEffect,useState } from "react";
import Secondpart_subpart from "./Secondpart_subpart";
function Fetch()
{
    const [items, setData] = useState(null);
    useEffect(() => {
        fetch('/temp1')
        .then(res => res.json())
        .then(data=>setData(data))
      },[]);
      if (items==null) {
        return <div>Loading ... </div>;
      } else {
        return (
            <h1>{items[4]}</h1>
        //   <ul>
        //     {items.map(item => (
        //       <li key={item[0][0]}>
        //         <p>{item[0]}</p>
        //       </li>
        //     ))}
        //   </ul>
        );
      }
}
export default Fetch
